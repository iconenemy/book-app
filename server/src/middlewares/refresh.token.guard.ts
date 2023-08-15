import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const refreshTokenGuard = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.split(" ")[1]
    if (token) {
        jwt.verify(token, process.env.REFRESH_TOKEN_KEY, (err: any, decoded: any) => {
            if (err) {
                return res.status(401).json({ msg: 'Unauthorized' });
            } else {
                req.user = decoded
                next();
            }
        })
    } else {
        return res.status(401).json({ msg: 'Unauthorized' })
    }
}