const db = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const SALT_FACTOR = 5;

const userSchema = db.Schema(
  {
    account_id: {
      type: String,
      minlength: 4,
    },
    account_pw: {
      type: String,
      minlength: 1,
    },
    name: {
      type: String,
      maxlength: 20,
    },
    email: {
      type: String,
      maxlength: 100,
      trim: true,
      unique: 1,
    },
    profile_url: {
      type: String,
    },
    token: {
      type: String,
    },
    friends: {
      type: [String],
    },
    location: {
      type: Object,
    },
  },
  { versionKey: false }
);

let noop = function () {}; //모델이 저장되기("save") 전(.pre)에 실행되는 함수
userSchema.pre("save", function (done) {
  var user = this;
  if (!user.isModified("account_pw")) {
    return done();
  }
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return done(err);
    bcrypt.hash(user.account_pw, salt, noop, function (err, hashedPassword) {
      if (err) return done(err);
      user.account_pw = hashedPassword;
      done();
    });
  });
});

userSchema.methods.checkPassword = function (guess, done) {
  bcrypt.compare(guess, this.account_pw, function (err, isMatch) {
    done(err, isMatch);
  });
};

const Users = db.model("User", userSchema);

module.exports = Users;
