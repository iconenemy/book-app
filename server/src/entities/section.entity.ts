import { UserRoleType } from '../types/user.type';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'
import { Book } from './book.entity';

@Entity({ name: 'section' })
export class Section {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    section_name: string

    @ManyToMany(() => Book, book => book.section)
    book: Book[]
}