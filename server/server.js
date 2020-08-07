const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");
const port = process.env.PORT || 4000;
const { pool } = require("./dbConfig");

const initializePassport = require("./passport.Config");
const CLIENT_HOMEPAGE_URL = "http://localhost:3000/signup";

initializePassport(passport);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.post("/users/signup", async (req, res) => {
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

// app.post("/users/login", async (req, res) => {
//   let { username, password } = req.body
//   const salt = await bcrypt;

//   const hashedPassword = await bcrypt.hash(salt + password, 10);

//   pool.query(
//     `SELECT * FROM users WHERE username = $1`,
//     [username],
//     (err, results) => {
//       console.log(results.rows[0])
//       if (err) {
//         console.log(err)
//       }

//       if (results.rows.length > 0) {
//         const user = results.row[0]
//         bcrypt.compare(password, user.password, function(err, isMatch) {
//           if (err) {
//             console.log("err")
//             if(isMatch) {
//               console.log("Match")
//             } else {
//               console.log("Didn't match")
//             }
//           } else {
//             console.log("no user")
//           // console.log(results.rows[0]);
//           }
//       });
//     }
//   });
// });

app.post(
  "/users/login",
  passport.authenticate("local", {
    successRedirect: "http://localhost:3000/login",
    failureRedirect: false,
  })
);

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
