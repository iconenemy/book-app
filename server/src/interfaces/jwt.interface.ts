import { IUser } from "./user.interface";
import { UserRoleType } from '../types/user.type'

export interface IJwtPayload extends Pick<IUser, 'id' | 'email' | 'role'> {
    id: string
    email: string;
    role: UserRoleType
}