import express from 'express' 
import { signup, signin, update } from '../controllers/user.js'

const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.put("/update", update)
export default router
