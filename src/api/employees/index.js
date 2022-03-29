import { Router } from 'express'
import { checkAuth } from '../helpers'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchEmployee,
  showMyProfile,
  updateProfile
} from './controller'

const router = new Router()

//POST Request http://localhost:8080/employees
router.post('/', checkAuth(true, ['ADMIN']), create)

router.get('/me', checkAuth(true), showMyProfile)

//PUT Request http://localhost:8080/employees/self-update
router.put('/self-update', checkAuth(true), updateProfile)

//PUT Request http://localhost:8080/employees/123
router.put('/:id', checkAuth(true, ['ADMIN']), update)

//GET Request http://localhost:8080/employees/search
router.get('/search', checkAuth(true), searchEmployee)

//GET Request http://localhost:8080/employees
router.get('/', checkAuth(true), index)

//GET Request http://localhost:8080/employees/123
router.get('/:id', checkAuth(true), show)

//DELETE Request http://localhost:8080/employees/123
router.delete('/:id', checkAuth(true, ['ADMIN']), destroy)


export default router
