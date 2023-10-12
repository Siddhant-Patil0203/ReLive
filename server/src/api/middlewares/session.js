import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import session from 'express-session'

const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  },
   (next)=>{
    next()
   }
  ))

export default app