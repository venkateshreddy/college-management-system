import { Router } from 'express'
import { checkAuth } from '../helpers'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchStudent
} from './controller'

const router = new Router()

router.post('/', checkAuth(true, ['ADMIN']), create)

router.put('/:id', checkAuth(true, ['ADMIN']), update)

router.get('/search', checkAuth(true, ['ADMIN','FACULTY']), searchStudent)

router.get('/', checkAuth(true, ['ADMIN','FACULTY']), index)

router.get('/:id', checkAuth(true, ['ADMIN','FACULTY']), show)

router.delete('/:id', checkAuth(true, ['ADMIN']), destroy)


//need to write another method to see his/her details as a student

export default router
