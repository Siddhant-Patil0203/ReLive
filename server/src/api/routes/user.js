import express from 'express' 
import { signup, signin, update } from '../controllers/user.js'
import authuser from '../middlewares/authUser.js'

const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.put("/update", authuser, update)
export default router
