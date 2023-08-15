import { Request } from 'express'

import SectionService from "../services/section.service";
import { TypedRequestBody, TypedRequestBodyParams } from "../types/req.type";
import { ICreateSectionDto, IUpdateSectionDto } from "../interfaces/section.interface";

export class SectionController {
    constructor(private readonly sectionService: SectionService) { }

    async create(req: TypedRequestBody<ICreateSectionDto>) {
        const { section_name } = req.body
        const findSectionByName = await this.sectionService.findBySectionName(section_name)
        if (findSectionByName) throw new Error('This section name has already in use')

        const newSection = await this.sectionService.create(req.body)
        return { section: newSection }
    }

    async find() {
        return await this.sectionService.find()
    }

    async findOne(req: Request<{ id: string }>) {
        const { id } = req.params
        return await this.sectionService.findOne(id)
    }

    async delete(req: Request<{ id: string }>) {
        const { id } = req.params
        return await this.sectionService.delete(id)
    }

    async upadate(req: TypedRequestBodyParams<{ id: string }, IUpdateSectionDto>) {
        const { id } = req.params
        const { section_name } = req.body

        const findSectionByName = await this.sectionService.findBySectionName(section_name)
        if (findSectionByName) throw new Error('This section name has already in use')

        return await this.sectionService.update(id, { section_name })
    }
}

export default new SectionController(new SectionService())