import express from 'express' 
import { signup, signin } from '../controllers/user.js'
import session from '../middlewares/session.js'

const router = express.Router()

router.post("/signup", signup)
router.post("/signin",session, signin)
export default router
