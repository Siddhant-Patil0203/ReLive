import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI

import index  from './src/api/routes/index.js'

const app = express();

app.use(index)


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
  app.listen(PORT, ()=> {
    console.log("server running on port: "+ PORT);
 })
})
