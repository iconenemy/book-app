import { IUser } from "../auth/authType"

export interface IBook {
    id: string
    title: string
    author: string
    isbn: string
    description: string
    page_count: number
}

export interface IGetOneBook {
    id: string
    title: string
    author: string
    isbn: string
    description: string
    page_count: number
    section: ISection[]
    owner: IUser
}

export interface IAllBooksRes {
    id: string
    title: string
    author: string
    isbn: string
    description: string
    page_count: number
    section: ISection[]
}

export interface ISection {
    id: string
    section_name: string
}

export interface IGetAllBooksByOwner extends IBook, ISection, Pick<IUser, 'id' | 'first_name' | 'last_name'> {
    id: string
    title: string
    author: string
    isbn: string
    description: string
    page_count: number
    owner: Pick<IUser, 'id' | 'first_name' | 'last_name'>
    section: ISection[]
}

export interface IBookCreate {
    title: string
    author: string
    description: string
    isbn: string
    page_count: number
    owner: string
    section: string[]
}

export interface IBookUpdate {
    id: string
    title: string
    author: string
    description: string
    isbn: string
    page_count: number
    owner: string
    section: string[]
}