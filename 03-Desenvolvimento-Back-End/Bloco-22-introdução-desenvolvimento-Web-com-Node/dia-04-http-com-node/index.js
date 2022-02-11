const express = require('express');
const app = express();

app.get('/ping', (_req, res) => {
  res.json({message: 'pong'})
})


app.listen(3000, () => console.log('alo alo teste'))