const cron = require('node-cron');
const User = require('./path/to/userSchema'); 


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
