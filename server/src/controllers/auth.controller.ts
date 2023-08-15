import { CookieOptions, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import { TypedRequestBody } from '../types/req.type'
import { ILoginUserDto, IRegisterUserDto } from "../interfaces/auth.interface";
import { IJwtPayload } from "../interfaces/jwt.interface";

export class AuthController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) { }

    async register(req: TypedRequestBody<IRegisterUserDto>) {
        const { email, password } = req.body

        const findUserByEmail = await this.userService.findByEmail(email)
        if (findUserByEmail) throw new Error('This username has already in use')

        const newPassword = await this.authService.hashPassword(password)

        const newUser = await this.userService.create({ ...req.body, password: newPassword })
        return { user: newUser }
    }

    async login(req: TypedRequestBody<ILoginUserDto>, res: Response) {
        const { email, password } = req.body

        const findUserByEmail = await this.userService.findByEmail(email)
        if (!findUserByEmail || !await this.authService.comparePasswords(password, findUserByEmail.password))
            throw new Error('User with such username does not exist or password is wrong')

        const { id, role } = findUserByEmail
        const { access_token, refresh_token } = await this.authService.issueTokens({ id, role, email })

        const cookieOptions: CookieOptions = this.authService.setCookieOption()
        res.cookie('refresh_token', refresh_token, cookieOptions)

        return {
            tokens: {
                access_token,
                refresh_token
            },
            user: {
                id,
                email,
                role
            }
        }
    }

    async logout(req: Request, res: Response) {
        const { refresh_token } = req.cookies

        if (!refresh_token)
            throw new Error('The client does not have access rights to the content')

        const { id } = this.authService.verifyRefreshToken(refresh_token) as JwtPayload
        if (!id) throw new Error('Forbidden decoded')

        res.clearCookie('refresh_token')
    }

    async refresh(req: Request, res: Response) {
        const { refresh_token } = req.cookies
        if (refresh_token === null) return res.status(405).json('No token provided')

        const { id } = this.authService.verifyRefreshToken(refresh_token) as JwtPayload
        if (!id) throw new Error('Forbidden decoded')

        const findUser = await this.userService.findOne(id)
        if (!findUser) throw new Error('Forbidden user')

        res.clearCookie('refresh_token')
        
        const { id: userId, role, email } = findUser
        const payload: IJwtPayload = { id: userId, role, email }

        const { access_token, refresh_token: newRefreshToken } = await this.authService.issueTokens(payload)

        const cookieOptions: CookieOptions = this.authService.setCookieOption()
        res.cookie('refresh_token', newRefreshToken, cookieOptions)

        return {
            tokens: {
                access_token,
                refresh_token: newRefreshToken,
            },
            user: { id, email, role }
        }
    }
}

export default new AuthController(new UserService(), new AuthService())