import { Router } from 'express'

import students from './students'
import departments from './departments'

const router = new Router()

router.use('/students', students)
router.use('/departments', departments)

export default router
