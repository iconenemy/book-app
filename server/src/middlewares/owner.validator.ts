import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../config/data.source';
import { Book } from '../entities/book.entity';

export const ownerValidator =
    () =>
        async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
            const { id } = req.params

            if (id.length !== 36) return res.status(400).json({ message: 'Invalid length of id params' });

            const findBook = await AppDataSource.manager.findOne(Book, { where: { id }, relations: ['owner'] });
            if (!findBook) return res.status(400).json({ message: 'Data with such id do not exist' });
            const userId = req?.user?.id ?? null

            return userId === findBook.owner.id ?
                next() :
                res.status(400).json({ message: 'Such user does not have permission' });
        };