const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.json({
    message: 'forntend project server'
  });
});


app.listen(5000, () => {
  console.log('Listening');
});
