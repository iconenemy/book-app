import { Request, Response, NextFunction } from 'express';
import { EntityTarget, ObjectLiteral } from 'typeorm';
import { AppDataSource } from '../config/data.source';

export const paramsValidator =
    (entityClass: EntityTarget<ObjectLiteral>) =>
        async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
            const { id } = req.params;

            if (id.length !== 36) return res.status(400).json({ message: 'Invalid length of id params' });

            const candidate = await AppDataSource.manager.findOneBy(entityClass, { id });
            return candidate ?
                next() :
                res.status(400).json({ message: 'Data with such id do not exist' });
        };