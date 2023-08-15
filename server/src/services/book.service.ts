import { ICreateBookDto, IUpdateBookDto } from "../interfaces/book.interface";
import { AppDataSource } from "../config/data.source";
import UserService from "./user.service";
import { Book } from "../entities/book.entity";
import SectionService from "./section.service";
import { Section } from "../entities/section.entity";
import { DeleteResult, UpdateResult } from "typeorm";

export default class BookService {
    private bookRepository = AppDataSource.getRepository<Book>(Book)
    private userService: UserService = new UserService()
    private sectionService: SectionService = new SectionService()

    async create(dto: ICreateBookDto): Promise<Book> {
        const { section, owner } = dto

        const resultSection = await Promise.all(section.map(item => (this.sectionService.findOne(item)) as Promise<Section>)).catch(() => {
            throw new Error('Section does not exist')
        })

        const findOwner = await this.userService.getOnById(owner)
        if (!findOwner) throw new Error('Owner with such id does not exist')

        return this.bookRepository.save(this.bookRepository.create({ ...dto, owner: findOwner, section: resultSection }))
    }

    async update(id: string, dto: IUpdateBookDto) {
        const { section, owner, author, description, isbn, page_count, title } = dto

        const findBook = await this.bookRepository.findOne({ where: { id } })
        if (!findBook) throw new Error('This book does not exist')

        const resultSection = await Promise.all(section.map(item => (this.sectionService.findOne(item)) as Promise<Section>)).catch(() => {
            throw new Error('Section does not exist')
        })

        const findOwner = await this.userService.getOnById(owner)
        if (!findOwner) throw new Error('Owner with such id does not exist')

        findBook.section = resultSection
        findBook.owner = findOwner
        findBook.author = author
        findBook.description = description
        findBook.isbn = isbn
        findBook.page_count = page_count
        findBook.title = title

        return this.bookRepository.save(findBook)
    }

    findOne(id: string): Promise<Book | null> {
        return this.bookRepository.findOne({ where: { id }, relations: ['owner', 'section'] })
    }

    find(): Promise<Book[]> {
        return this.bookRepository.find({ relations: ['section', 'owner'] })
    }

    delete(id: string): Promise<DeleteResult> {
        return this.bookRepository.delete(id)
    }

    getCountBook(): Promise<number> {
        return this.bookRepository.count()
    }

    async getBooksByOwner(owner: string): Promise<Book[]> {
        console.log('Woner: ', owner);
        const findOwner = await this.userService.getOnById(owner)
        
        if (!findOwner) throw new Error('Such owner does not exist')

        return this.bookRepository.find({
            where: {
                owner: findOwner
            },
            relations: {
                owner: true,
                section: true
            },
            select: {
                id: true,
                title: true,
                author: true,
                isbn: true,
                description: true,
                page_count: true,
                owner: {
                    id: true,
                    first_name: true,
                    last_name: true
                }
            }
        })
    }
}