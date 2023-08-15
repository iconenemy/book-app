import { IUser, RoleType } from "../auth/authType";
import { IBook } from "../book/book.type";

export type UserUpdateBodyReq = Pick<IUser, "first_name" | "last_name">;
export type UserUpdateRes = Pick<IUser, "first_name" | "last_name">
export type UserUpdateReq = Pick<IUser, "id" | "first_name" | "last_name">

export interface IGetManagerUsersRes {
    id: string;
    child: Pick<IUser, 'id' | 'first_name' | 'last_name' | 'email'>[]
}

export interface IGetManagerUsersReq {
    id: string
}

export interface IGetAllUsers {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: RoleType;
    collection: IBook[]
}

export interface IGetAllUsersByManager {
    id: string
    child: IGetAllUsers[]
}