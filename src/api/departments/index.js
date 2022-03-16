import { Router } from 'express'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchDepartment
} from './controller'

const router = new Router()

//POST Request http://localhost:8080/departments
router.post('/', create)

//PUT Request http://localhost:8080/departments/123
router.put('/:id', update)

//GET Request http://localhost:8080/departments/search
router.get('/search', searchDepartment)

//GET Request http://localhost:8080/departments
router.get('/', index)

//GET Request http://localhost:8080/departments/123
router.get('/:id', show)

//DELETE Request http://localhost:8080/departments/123
router.delete('/:id', destroy)


export default router
