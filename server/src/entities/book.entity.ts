import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm'
import { User } from './user.entity';
import { Section } from './section.entity';

@Entity({ name: 'book' })
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    author: string

    @Column({ unique: true, nullable: false })
    isbn: string;

    @Column()
    description: string;

    @Column()
    page_count: number

    @ManyToOne(() => User, user => user.collection)
    owner: User

    @ManyToMany(() => Section, section => section.book, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinTable()
    section: Section[]
}