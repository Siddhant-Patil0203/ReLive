import userModel from '../models/userModel.js';

import cron from 'node-cron';


function startStreakResetTask() {
  cron.schedule('0 0 * * *', async () => {
    const today = new Date().toISOString().split('T')[0];
  
  
    const usersToReset = await User.find({
      lastExerciseDate: { $lt: today },
    });
  
  
    usersToReset.forEach(async (user) => {
      user.streakNumber = 0;
      user.save();
    });
  
    console.log('Streaks reset for users who missed exercise today.');
  });
}

export default  {
  startStreakResetTask,
}