const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const port = 4000


const users = []

app.use(express.json())

app.get('/users', (req, res) => {
  res.send(users)
});

app.post('/users', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = {name: req.body.name, password: hashedPassword}
    users.push(user)
    res.status(201).send()
  } catch{
    res.status(500).send()
  }
})

app.listen(port, () => {
  console.log(`Server loaded on port ${port}`)
});