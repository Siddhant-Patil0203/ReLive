import mongoose from "mongoose";

const userModel = mongoose.Schema({
    email: { type: String },
    password: { type: String },
    username: { type: String },
    age: { type: Number },
    gender: { type: String }, 
    weight: { type: Number }, 
    height: { type: Number },
    googleId: { type: String },
    planType: { type: String, default: "easy"},
    reminderTime: { type: Date },
    isOnboarded: { type: Boolean, default: false}
})

export default mongoose.model("users", userModel)