import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.patch('/updateProfile', checkAuth, usersCtrl.updateProfile)