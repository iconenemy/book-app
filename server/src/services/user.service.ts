import { User } from '../entities/user.entity'
import { AppDataSource } from '../config/data.source'
import { IRegisterUserDto } from '../interfaces/auth.interface'
import { IAddUsersToManagerDto } from '../interfaces/user.interface'

export default class UserService {
    private userRepository = AppDataSource.getRepository<User>(User)

    getAll(): Promise<User[]> {
        return this.userRepository.find({ relations: ['collection', 'child'] })
    }

    getOnById(id: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { id }, relations: ['collection'], select: { id: true, collection: true } })
    }

    findOne(id: string): Promise<User | null> {
        return this.userRepository.findOne(({ where: { id } }))
    }

    create(dto: IRegisterUserDto): Promise<User> {
        return this.userRepository.save(this.userRepository.create(dto))
    }

    findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { email } })
    }

    async addUsersToManager(dto: IAddUsersToManagerDto) {
        const { manager, users } = dto

        const findManager = await this.userRepository.findOne({ where: { id: manager } })
        if (!findManager) throw new Error('Such manager does not exist')

        if (users.length > 3) throw new Error('Only 3 users can be added')

        const data = await Promise.all(users.map(id => this.userRepository.findOne({ where: { id } })))

        findManager.child = data as User[]
        return this.userRepository.save(findManager)
    }

    findUserChild(id: string) {
        return this.userRepository.findOne({ where: { id }, relations: ['child'], select: { id: true, child: { id: true, first_name: true, last_name: true, email: true, role: true } } })
    }
}