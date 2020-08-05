const express = require('express');
const app = express();
const port = 4000


const testing = []

app.get('/', (req, res) => {
  res.send(testing)
});

app.listen(port, () => {
  console.log(`Server loaded on port ${port}`)
});