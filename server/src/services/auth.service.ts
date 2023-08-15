import { CookieOptions } from 'express'
import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'

import { IJwtPayload } from '../interfaces/jwt.interface';

export default class AuthService {
    private accessSecretKey: string = process.env.ACCESS_TOKEN_KEY
    private refreshSecretKey: string = process.env.REFRESH_TOKEN_KEY

    async issueTokens(payload: IJwtPayload) {
        const [access_token, refresh_token] = await Promise.all([
            jwt.sign(payload, this.accessSecretKey, {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
            }),
            jwt.sign(payload, this.refreshSecretKey, {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN
            })
        ])
        return { access_token, refresh_token }
    }

    verifyAccessToken(access_token: string) {
        return jwt.verify(access_token, this.accessSecretKey)
    }

    verifyRefreshToken(refresh_token: string) {
        return jwt.verify(refresh_token, this.refreshSecretKey)
    }

    hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 9)
    }

    comparePasswords(password: string, hashPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashPassword)
    }

    setCookieOption(): CookieOptions {
        return {
            httpOnly: true,
            expires: process.env.COOKIE_EXPIRES_TIME,
            maxAge: process.env.COOKIE_MAX_AGE
        }
    }
}