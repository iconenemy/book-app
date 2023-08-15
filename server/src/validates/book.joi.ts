import Joi from 'joi'

import { ICreateBookDto } from "../interfaces/book.interface"

export const bookSchemaCreate = Joi.object<ICreateBookDto>({
    title: Joi.string().min(5).max(50).required().messages({
        'string.empty': 'Title cannot be an empty field',
        'string.min': 'Title should have a minimum length of 5',
        'string.max': 'Title should have a maximum length of 50'
    }),
    author: Joi.string().min(5).max(100).required().messages({
        'string.empty': 'Author name cannot be an empty field',
        'string.min': 'Author name should have a minimum length of 5',
        'string.max': 'Author name should have a maximum length of 100'
    }),
    description: Joi.string().min(5).max(500).required().messages({
        'string.empty': 'Description cannot be an empty field',
        'string.min': 'Description should have a minimum length of 5',
        'string.max': 'Description should have a maximum length of 500'
    }),
    isbn: Joi.string().length(13).required().messages({
        'string.empty': 'ISBN cannot be an empty field',
        'string.equal': 'ISBN should have a 15 length',
    }),
    page_count: Joi.number().min(15).max(1000).required(),
    owner: Joi.string().length(36),
    section: Joi.array().items(Joi.string().length(36))
})

export const bookSchemaUpdate = Joi.object<ICreateBookDto>({
    title: Joi.string().min(5).max(50).required().messages({
        'string.empty': 'Title cannot be an empty field',
        'string.min': 'Title should have a minimum length of 5',
        'string.max': 'Title should have a maximum length of 50'
    }),
    author: Joi.string().min(5).max(100).required().messages({
        'string.empty': 'Author name cannot be an empty field',
        'string.min': 'Author name should have a minimum length of 5',
        'string.max': 'Author name should have a maximum length of 100'
    }),
    description: Joi.string().min(5).max(500).required().messages({
        'string.empty': 'Description cannot be an empty field',
        'string.min': 'Description should have a minimum length of 5',
        'string.max': 'Description should have a maximum length of 500'
    }),
    isbn: Joi.string().length(13).required().messages({
        'string.empty': 'ISBN cannot be an empty field',
        'string.equal': 'ISBN should have a 15 length',
    }),
    page_count: Joi.number().min(15).max(1000).required(),
    owner: Joi.string().length(36),
    section: Joi.array().items(Joi.string().length(36))
})