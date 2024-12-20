// index.js
import cron from 'node-cron';

// Cron job: Logs "Hello" every 5 seconds
cron.schedule('*/5 * * * * *', () => {
  console.log('Hello');
});

console.log('Cron job initialized. Logging "Hello" every 5 seconds.');
