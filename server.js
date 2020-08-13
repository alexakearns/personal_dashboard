const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");
const path = require("path");
const port = process.env.PORT || 4000;
const secret = process.env.SECRET || "localdev";
require("dotenv").config();
const { pool } = require("./dbConfig");

const initializePassport = require("./passport.Config");

initializePassport(passport);
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    cookieName: "session",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.post("/api/users/signup", async (req, res) => {
  let { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  pool.query(
    `SELECT * FROM users WHERE username = $1`,
    [username],
    (error, results) => {
      if (error) {
        console.log(error);
      }
      console.log(results);
      if (results.rows.length > 0) {
        console.log("error")
      } else {
      pool.query(
        `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`,
        [username, email, hashedPassword],
        (err, results) => {
          if (err) {
            console.log(err);
          }
          res.status(200).json(results.rows);
        }
      );
      }
    }
    
    );
});

app.post(
  "/api/users/login",
  passport.authenticate("local", {
    successRedirect: "/successjson",
    failureRedirect: false,
  })
);

app.get('/successjson', function(req, res) {
  res.json({message: "Success", username: req.user})
})

app.get("/api/users", (req, res) => {
  pool.query(`SELECT * FROM users`, (error, results) => {
    if (error) {
      console.log(error);
    }
    res.status(200).json(results.rows);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server loaded on port ${port}`);
});
