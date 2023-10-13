import mongoose, { Schema } from "mongoose";

const userModel = mongoose.Schema({
    id: {type: String},
    profileImage: {type:Buffer},
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
    lastExerciseDate: { type: Date },
    streakCount: { type: Number, default:0 },
    isOnboarded: { type: Boolean, default: false}
})

export default mongoose.model("users", userModel)