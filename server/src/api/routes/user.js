import express from 'express' 
import { signup, signin, update } from '../controllers/user.js'
import authUser from '../middlewares/authUser.js'

const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.put("/update", authUser, update)
export default router
