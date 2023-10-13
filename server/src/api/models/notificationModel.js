import mongoose, { Schema } from "mongoose";

const notificationModel = mongoose.Schema({
    _id: { type:Schema.ObjectId },
    title: { type: String },
    message: { type: String },
    isRead: { type: String, default: false},
    receiverId: { type: Schema.ObjectId }
})

export default mongoose.model("notifications", notificationModel)