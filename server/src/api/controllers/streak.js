import userModel from "../models/userModel";

export const completeDailyTask = async (userId) => {

    const today = new Date().toISOString().split('T')[0];
    
    userModel.findOneAndUpdate({_id:userId},
        {$inc: {streakCount:1}},
        {$set: {lastExerciseDate:today}}
        )
};