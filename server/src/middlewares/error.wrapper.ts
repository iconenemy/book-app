import { Request, Response, NextFunction } from 'express';

export const errorWrapper =
    (cntrl: Function) => async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json(await cntrl(req, res, next));
        } catch (error: any) {
            res.status(400).json({ error: error?.message });
            next();
        }
    };
