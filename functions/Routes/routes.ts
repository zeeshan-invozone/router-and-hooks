const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.send('hi how are you express using firebase');
});

exports.api = functions.https.onRequest(app);
