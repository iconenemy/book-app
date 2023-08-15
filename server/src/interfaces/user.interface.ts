import { UserRoleType } from "../types/user.type";

export interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: UserRoleType;
}

export interface IAddUsersToManagerDto {
    manager: string
    users: string[]
}