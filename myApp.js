let express = require('express');
let app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  let message = 'Hello json';
  process.env.MESSAGE_STYLE == 'uppercase'
    ? (message = message.toUpperCase())
    : (message = message);
  res.json({ message: message });
});

console.log('Hello World');

module.exports = app;
