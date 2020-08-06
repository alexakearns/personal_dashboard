const express = require("express");
const app = express();
const cors = require('cors');
const bcrypt = require("bcrypt");
const port = process.env.PORT || 4000;
const { pool } = require("./dbConfig");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.post("/users/signup", async (req, res) => {
  let { username, email, password } = req.body;
  const salt = await bcrypt.genSalt();

  const hashedPassword = await bcrypt.hash(salt + password, 10);

  pool.query(
    `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`,
    [username, email, hashedPassword],
    (err, results) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json(results);
    }
  );
});

app.get("/users", (req, res) => {
  pool.query(`SELECT * FROM users`, (error, results) => {
    if (error) {
      console.log(error);
    }
    res.status(200).json(results.rows);
  });
});


app.listen(port, () => {
  console.log(`Server loaded on port ${port}`);
});
