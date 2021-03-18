const Agenda = require('agenda');

const dbURL = 'mongodb://127.0.0.1:27017/AgendaMedium';

const agenda = new Agenda({
  db: {address: dbURL, collection: 'Agenda'}});

agenda.define('log hello medium', async job => {
  const {name} = job.attrs;
  console.log(`Hello ${name}`);
});

(async function() {
  await agenda.start(); // Start Agenda instance
  console.log('hehes')
  // await agenda.every('0 0 1 1 *', 'happy new year'); // Run the dummy job every year.
  await agenda.schedule('in 5 seconds', 'log hello medium', {name: 'Medium'}); // Run the dummy job in 10 minutes and passing data.
  await agenda.every('5 seconds', 'log hello medium'); // Run the dummy job in 10 minutes and passing data.
})();
