import cron from 'node-cron';
 console.log(`env var... ${process.env.CUSTOM_URL}`);
cron.schedule(`*/1 * * * *`, async () => {
  console.log(`running your task... `);
  fetch(process.env.CUSTOM_URL || "").then(res => console.log(res)).catch(err=> console.log(err))
});
