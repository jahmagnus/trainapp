import User from "./User.js";
import bcrypt from "bcrypt";
import LocalStrategy, { Strategy } from "passport-local";

export default function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userData = {
        firstName: user.username,
        surname: user.surname,
        payNumber: user.payNumber,
        role: user.role,
      };
      cb(err, userData);
    });
  });
}
