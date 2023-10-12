import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI

import index  from './src/api/routes/index.js'
import user from './src/api/routes/user.js'
import googleAuth from './src/api/routes/googleAuth.js'
import initializePassport from './src/api/middlewares/passportConfig.js';
import streak from './src/api/routes/streak.js'

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


initializePassport(app)


app.use("/", index)
app.use("/user", user)
app.use("/auth", googleAuth)
app.use("/streak", streak)





mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
  app.listen(PORT, ()=> {
    console.log("server running on port: "+ PORT);
 })
})
