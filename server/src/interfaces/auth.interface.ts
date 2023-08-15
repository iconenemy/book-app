import { UserRoleType } from "../types/user.type";
import { IUser } from "./user.interface";

export interface IRegisterUserDto extends Pick<IUser, 'first_name' | 'last_name' | 'email' | 'password' | 'role'> {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: UserRoleType
}

export interface ILoginUserDto extends Pick<IUser, 'email' | 'password'> {
    email: string;
    password: string;
}