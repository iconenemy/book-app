import { UserRoleType } from '../types/user.type';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm'
import { Book } from './book.entity';

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column({ unique: true, nullable: false })
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: ['admin', 'manager', 'guest'],
        default: 'guest'
    })
    role: UserRoleType;

    @ManyToMany(() => User)
    @JoinTable()
    child: User[]

    @OneToMany(() => Book, book => book.owner, { eager: true })
    collection: Book[]
}