const express = require('express');
const app = express();
const port = 4000


const users = []

app.use(express.json())

app.get('/users', (req, res) => {
  res.send(users)
});

app.post('/users', (req, res) => {
  const user = {name: req.body.name, password: req.body.password}
  users.push(user)
  res.status(201).send()
})

app.listen(port, () => {
  console.log(`Server loaded on port ${port}`)
});