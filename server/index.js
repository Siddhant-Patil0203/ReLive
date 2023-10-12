import express from 'express';
import mongoose from 'mongoose';


const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res)=>{
  res.send("running");
})



app.listen(PORT, ()=> {
   console.log("listing on port: "+ PORT);
})