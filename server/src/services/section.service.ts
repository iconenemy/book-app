import { Section } from "../entities/section.entity";
import { AppDataSource } from "../config/data.source";
import { ICreateSectionDto, IUpdateSectionDto } from "../interfaces/section.interface";
import { DeleteResult, UpdateResult } from "typeorm";

export default class SectionService {
    private sectionRepository = AppDataSource.getRepository<Section>(Section)

    create(dto: ICreateSectionDto): Promise<Section> {
        return this.sectionRepository.save(this.sectionRepository.create(dto))
    }

    findBySectionName(section_name: string): Promise<Section | null> {
        return this.sectionRepository.findOne({ where: { section_name } })
    }

    find(): Promise<Section[]> {
        return this.sectionRepository.find()
    }

    findOne(id: string): Promise<Section | null> {
        return this.sectionRepository.findOne({ where: { id } })
    }

    delete(id: string): Promise<DeleteResult> {
        return this.sectionRepository.delete(id)
    }

    update(id: string, dto: IUpdateSectionDto): Promise<UpdateResult> {
        return this.sectionRepository.update(id, dto)
    }
}