import userModel from "../models/userModel.js";

export const completeDailyTask = async (req, res) => {

    const userId = req.userId
    const today = new Date().toISOString().split('T')[0];
    
    const result = await userModel.findOneAndUpdate({_id:userId},
        {$inc: {streakCount:1},
        $set: {lastExerciseDate:today}},
        { new: true }
        )

    if(result){
        return res.send("streak updated")
    }    
};