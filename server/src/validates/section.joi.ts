import Joi from 'joi'

import { ICreateSectionDto } from '../interfaces/section.interface'

export const sectionSchemaCreate = Joi.object<ICreateSectionDto>({
    section_name: Joi.string().min(4).max(20).required().messages({
        'string.empty': 'Section name cannot be an empty field',
        'string.min': 'Section name should have a minimum length of 4',
        'string.max': 'Section name should have a maximum length of 20'
    }),
})

export const sectionSchemaUpdate = Joi.object<ICreateSectionDto>({
    section_name: Joi.string().min(4).max(20).required().messages({
        'string.empty': 'Section name cannot be an empty field',
        'string.min': 'Section name should have a minimum length of 4',
        'string.max': 'Section name should have a maximum length of 20'
    }),
})