const cron = require('node-cron');
const User = require('./path/to/userSchema'); 


const dateToCron = (date) => {
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const dayOfWeek = date.getDay();

  return `${minutes} ${hours} ${days} ${months} ${dayOfWeek}`;
};

function startReminder(date) {

    const expression = dateToCron(date)

  cron.schedule(expression, async () => {
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

module.exports = {
  startReminder,
}

