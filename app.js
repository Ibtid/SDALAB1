const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('welcome azure');
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
