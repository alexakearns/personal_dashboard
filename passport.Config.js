const LocalStrategy = require('passport-local').Strategy;
const {pool} = require('./dbConfig');
const bcrypt = require('bcrypt');

function initialize(passport){
  const authenticateUser = (username, password, done) => {
    pool.query(
      `SELECT * FROM users WHERE username = $1`, [username], (err, results) => {
        if (err) {
          console.log(err)
        }
        console.log(results.rows);

        if (results.rows.length > 0) {
          const user = results.rows[0];
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              console.log(err)
            }
            if(isMatch) {
              return done(null, user);
            } else {
              return done(null, false, {message: "Password incorrect"});
            }
          })
        } else {
          return done(null, false, {message: "User not registered"})
        }
      }
    )
  }
  passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password"
  },
  authenticateUser
  ))

  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((username, done) => {
    pool.query(
      `SELECT * FROM users WHERE username = $1`, [username], (err, results) => {
        if (err) {
          console.log(err);
        }
        return done(null, results.rows);
      }
    )
  })
}

module.exports = initialize;