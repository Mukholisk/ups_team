const passport = require("passport");
const User = require('../Models/User');
const LocalStrategy = require("passport-local").Strategy;

passport.use('local-login', new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
    passReqToCallback: true
}, (req, ID, password, done) =>{
    let query = User.findOne({id: ID}, (err, user) =>{
        if(err) return done(err);
        if(!user) return done(null, false, {message: "일치하는 사용자가 없습니다."});
        user.checkPassword(password, (err, isMatch) => {
            if(err) return done(err);
            if(isMatch) return done(null, user);
            else return done(null, false, {message: "일치하는 사용자가 없습니다."});
        });
    });
}));

module.exports = function() {
    passport.serializeUser(function(user, done){
        done(null, user._id);
    });

    passport.deserializeUser(function(user, done){
        let ID = user.id;
        let nickname = user.nickname;
        let role = user.role;
        done(null, {'ID': ID, 'nickname':nickname, 'role': role}); // 세션에서 값을 뽑아서 페이지에 전달하는 역할
    });
};
