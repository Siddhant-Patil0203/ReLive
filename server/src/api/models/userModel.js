import mongoose from "mongoose";

const userModel = mongoose.Schema({
    email: { type: String },
    password: { type: String },
    username: { type: String },
    age: { type: Number },
    gender: { type: String }, 
    weight: { type: Number }, 
    height: { type: Number }
})

export default mongoose.model("users", userModel)