import cron from 'node-cron';

cron.schedule(`*/1 * * * *`, async () => {
  console.log(`running your task...`);
  fetch("https://foreign-exchange-api-dev.up.railway.app/api/exchange/v1/currency/all").then(res => console.log(res)).catch(err=> console.log(err))
});
