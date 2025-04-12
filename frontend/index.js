// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
npm init -y