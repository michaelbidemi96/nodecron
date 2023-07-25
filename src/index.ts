import cron from 'node-cron';

cron.schedule(`*/1 * * * *`, async () => {
  console.log(`running your task...`);
  fetch("https://foreign-exchange-api-dev.onrender.com/swagger-ui/index.html#/kyc-controller/handleFileUpload").then(res => console.log(res)).catch(err=> console.log(err))
});
