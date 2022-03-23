import { Router } from 'express'

import students from './students'
import departments from './departments'
import employees from './employees';
import users from './users';

const router = new Router()

router.use('/students', students)
router.use('/departments', departments)
router.use('/employees', employees)
router.use('/users', users)

export default router
