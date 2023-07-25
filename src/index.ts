import cron from 'node-cron';

cron.schedule(`*/1 * * * *`, async () => {
  console.log(`running your task... ${process.env.CUSTOM_URL}`);
  fetch(process.env.CUSTOM_URL || "").then(res => console.log(res)).catch(err=> console.log(err))
});
