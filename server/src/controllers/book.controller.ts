import { Request } from "express";

import BookService from "../services/book.service";
import { TypedRequestBody, TypedRequestBodyParams } from "../types/req.type";
import { ICreateBookDto, IUpdateBookDto } from "../interfaces/book.interface";

export class BookController {
    constructor(
        private readonly bookService: BookService) { }

    async create(req: TypedRequestBody<ICreateBookDto>) {
        return await this.bookService.create(req.body)
    }

    async find() {
        return await this.bookService.find()
    }

    async findOne(req: Request<{ id: string }>) {
        const { id } = req.params
        return await this.bookService.findOne(id)
    }

    async updateOne(req: TypedRequestBodyParams<{ id: string }, IUpdateBookDto>) {
        const { id } = req.params
        return await this.bookService.update(id, req.body)
    }

    async delete(req: Request<{ id: string }>) {
        const { id } = req.params
        return await this.bookService.delete(id)
    }

    async getCountBook() {
        return await this.bookService.getCountBook()
    }

    async getBooksByOwner(req: Request<{ id: string }>) {
        const { id } = req.params
        return await this.bookService.getBooksByOwner(id)
    }
}

export default new BookController(new BookService())
