import { Router } from 'express'

import {
  create,
  login
} from './controller'

const router = new Router()

//POST Request http://localhost:8080/students
router.post('/signup', create)

//PUT Request http://localhost:8080/students/123
router.post('/login', login)

export default router
