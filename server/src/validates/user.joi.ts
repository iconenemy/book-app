import Joi from 'joi'

import { ILoginUserDto, IRegisterUserDto } from '../interfaces/auth.interface'
import { IAddUsersToManagerDto } from '../interfaces/user.interface'

export const userSchemaRegister = Joi.object<IRegisterUserDto>({
    first_name: Joi.string().pattern(/^[A-Z]{1}[a-z]+$/).min(3).max(15).messages({
        'string.pattern.base': 'First name should contain letters only and the first letter should be a capital',
        'string.empty': 'First name cannot be an empty field',
        'string.min': 'First name should have a minimum length of 3',
        'string.max': 'First name should have a maximum length of 15'
    }),
    last_name: Joi.string().pattern(/^[A-Z]{1}[a-z]+$/).min(3).max(20).messages({
        'string.pattern.base': 'Last name should contain letters only and the first letter should be a capital',
        'string.empty': 'Last name cannot be an empty field',
        'string.min': 'Last name should have a minimum length of 3',
        'string.max': 'Last name should have a maximum length of 20'
    }),
    email: Joi.string().email().messages({
        'string.base': 'Email should be a type of text',
        'string.empty': 'Email cannot be an empty field',
        'string.domain': 'Email shoud have a domain length of 2',
    }),
    password: Joi.string().min(8).max(20).required().messages({
        'string.empty': 'Password cannot be an empty field',
        'string.min': 'Password should have a minimum length of 8',
        'string.max': 'Password should have a maximum length of 20',
        'string.required': 'Password is a required field'
    }),
    role: Joi.string().optional()
})

export const userSchemaLogin = Joi.object<ILoginUserDto>({
    email: Joi.string().email().messages({
        'string.base': 'Email should be a type of text',
        'string.empty': 'Email cannot be an empty field',
        'string.domain': 'Email shoud have a domain length of 2',
    }),
    password: Joi.string().min(8).max(20).required().messages({
        'string.empty': 'Password cannot be an empty field',
        'string.min': 'Password should have a minimum length of 8',
        'string.max': 'Password should have a maximum length of 20',
        'string.required': 'Password is a required field'
    }),
})

export const userSchemaAddUsersToMnanager = Joi.object<IAddUsersToManagerDto>({
    manager: Joi.string().length(36).required().messages({
        'string.empty': 'Manager cannot be an empty field',
        'string.length': 'Manager should have a minimum length of 8',
    }),
    users: Joi.array().min(1).max(3).items(Joi.string().length(36))
})