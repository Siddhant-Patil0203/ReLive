import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI

const app = express();
app.get("/", (req, res)=>{
  res.send("running");
})


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
  app.listen(PORT, ()=> {
    console.log("listing on port: "+ PORT);
 })
})
