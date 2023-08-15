import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const accessTokenGuard = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1]
    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {      
          if (err) {
            return res.status(401).json({msg: 'invalid token'});    
          } else {
            req.user = decoded  
            next();
          }
        })
    } else {
      return res.status(401).json({msg: 'Unauthorized'})
    }
}