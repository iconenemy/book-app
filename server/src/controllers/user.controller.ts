import { Request, Response } from 'express'

import UserService from '../services/user.service'
import AuthService from '../services/auth.service'
import { TypedRequestBody } from '../types/req.type'
import { IAddUsersToManagerDto } from '../interfaces/user.interface'

export class UserController {
    constructor(private readonly userService: UserService) { }

    async getAllUsers() {
        return await this.userService.getAll()
    }

    async findOne(req: Request<{ id: string }>) {
        const { id } = req.params

        return await this.userService.getOnById(id)
    }

    async addUsersToManger(req: TypedRequestBody<IAddUsersToManagerDto>) {
        return await this.userService.addUsersToManager(req.body)
    }

    async findUserChild(req: Request<{ id: string }>) {
        const { id } = req.params
        return await this.userService.findUserChild(id)
    }
}

export default new UserController(new UserService())