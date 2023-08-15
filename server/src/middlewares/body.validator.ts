import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export const bodyValidator =
  (schema: Joi.AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    return error == null ? next() : res.status(400).json(error.details);
  };
