import { Router } from 'express'

import authController from '../../controllers/auth.controller'
import { errorWrapper } from '../../middlewares/error.wrapper'
import { bodyValidator } from '../../middlewares/body.validator'
import { userSchemaRegister, userSchemaLogin } from '../../validates/user.joi'
import { accessTokenGuard } from '../../middlewares/access.token.guard'

const router: Router = Router()

router.post('/register', bodyValidator(userSchemaRegister), errorWrapper(authController.register.bind(authController)))
router.post('/login', bodyValidator(userSchemaLogin), errorWrapper(authController.login.bind(authController)))
router.get('/logout', accessTokenGuard, errorWrapper(authController.logout.bind(authController)))
router.get('/refresh', errorWrapper(authController.refresh.bind(authController)))

export default router