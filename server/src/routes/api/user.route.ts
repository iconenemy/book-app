import { Router } from 'express'

import { errorWrapper } from '../../middlewares/error.wrapper'
import userController from '../../controllers/user.controller'
import { bodyValidator } from '../../middlewares/body.validator'
import { userSchemaAddUsersToMnanager } from '../../validates/user.joi'
import { paramsValidator } from '../../middlewares/param.validator'
import { User } from '../../entities/user.entity'
import { accessTokenGuard } from '../../middlewares/access.token.guard'
import { adminGuard } from '../../middlewares/admin.guard'
import { managerGuard } from '../../middlewares/manager.guard'

const router: Router = Router()

router.get('/', accessTokenGuard, adminGuard, errorWrapper(userController.getAllUsers.bind(userController)))
router.get('/:id', accessTokenGuard, errorWrapper(userController.findOne.bind(userController)))
router.put('/manager', accessTokenGuard, adminGuard, bodyValidator(userSchemaAddUsersToMnanager), errorWrapper(userController.addUsersToManger.bind(userController)))
router.get('/manager/:id', accessTokenGuard, managerGuard, paramsValidator(User), errorWrapper(userController.findUserChild.bind(userController)))

export default router