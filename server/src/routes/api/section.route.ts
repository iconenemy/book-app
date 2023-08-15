import { Router } from 'express'

import { errorWrapper } from '../../middlewares/error.wrapper'
import sectionController from '../../controllers/section.controller'
import { bodyValidator } from '../../middlewares/body.validator'
import { sectionSchemaCreate, sectionSchemaUpdate } from '../../validates/section.joi'
import { adminGuard } from '../../middlewares/admin.guard'
import { paramsValidator } from '../../middlewares/param.validator'
import { Section } from '../../entities/section.entity'
import { accessTokenGuard } from '../../middlewares/access.token.guard'

const router: Router = Router()

router.post('/', accessTokenGuard, adminGuard, bodyValidator(sectionSchemaCreate), errorWrapper(sectionController.create.bind(sectionController)))
router.get('/', errorWrapper(sectionController.find.bind(sectionController)))
router.get('/:id', adminGuard, paramsValidator(Section), errorWrapper(sectionController.findOne.bind(sectionController)))
router.put('/:id', accessTokenGuard, adminGuard, paramsValidator(Section), bodyValidator(sectionSchemaUpdate), errorWrapper(sectionController.upadate.bind(sectionController)))
router.delete('/:id', accessTokenGuard, adminGuard, paramsValidator(Section), errorWrapper(sectionController.delete.bind(sectionController)))

export default router