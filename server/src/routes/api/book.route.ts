import { Router } from 'express'

import { errorWrapper } from '../../middlewares/error.wrapper'
import bookController from '../../controllers/book.controller'
import { paramsValidator } from '../../middlewares/param.validator'
import { Book } from '../../entities/book.entity'
import { bodyValidator } from '../../middlewares/body.validator'
import { bookSchemaCreate, bookSchemaUpdate } from '../../validates/book.joi'
import { accessTokenGuard } from '../../middlewares/access.token.guard'
import { ownerValidator } from '../../middlewares/owner.validator'

const router: Router = Router()

router.post('/', accessTokenGuard, bodyValidator(bookSchemaCreate), errorWrapper(bookController.create.bind(bookController)))
router.get('/', errorWrapper(bookController.find.bind(bookController)))
router.get('/owner/:id', accessTokenGuard, errorWrapper(bookController.getBooksByOwner.bind(bookController)))
router.get('/count', errorWrapper(bookController.getCountBook.bind(bookController)))
router.get('/:id', paramsValidator(Book), errorWrapper(bookController.findOne.bind(bookController)))
router.put('/:id', accessTokenGuard, ownerValidator(), paramsValidator(Book), bodyValidator(bookSchemaUpdate), errorWrapper(bookController.updateOne.bind(bookController)))
router.delete('/:id', accessTokenGuard, ownerValidator(), paramsValidator(Book), errorWrapper(bookController.delete.bind(bookController)))

export default router