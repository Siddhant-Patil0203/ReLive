import express from 'express'
import { completeDailyTask } from "../controllers/streak.js";
import authUser from '../middlewares/authUser.js';

const router = express.Router()

router.put("/increase", authUser, completeDailyTask)

export default router
