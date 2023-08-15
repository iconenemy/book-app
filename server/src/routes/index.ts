import { Application } from 'express';

import userRouter from './api/user.route'
import authRouter from './api/auth.route'
import bookRouter from './api/book.route'
import sectionRouter from './api/section.route'

class AppRouter {
    constructor(private app: Application) { }
    init() {
        this.app.get('/api', (_, res) => {
            res.status(200).json({ message: 'Okey!' })
        })
        this.app.use('/api/user', userRouter)
        this.app.use('/api/auth', authRouter)
        this.app.use('/api/book', bookRouter)
        this.app.use('/api/section', sectionRouter)
    }
}

export default AppRouter;