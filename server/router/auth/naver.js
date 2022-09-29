const router = require('express').Router() // express router
const Naverloginapi = require('../../conn/naver_login') // Naver Login API Config
const passport = require('passport'); // Passport
const NaverStrategy = require('passport-naver').Strategy // Passport Naver 전략


router.get('/',passport.authenticate('naver',null),function(req, res) {
    console.log("/main/naver");
});

router.get('/callback', passport.authenticate('naver', {
    successRedirect: '/',
    failureRedirect: '/silpae'
  })
 );


passport.use(new NaverStrategy({
    clientID: Naverloginapi.client_id,
    clientSecret: Naverloginapi.client_secret,
    callbackURL: Naverloginapi.redirectURI
},
function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
        var user = {
            name: profile.displayName,
            email: profile.emails[0].value,
            username: profile.displayName,
            provider: 'naver',
            naver: profile._json
        };
        console.log("user=");
        console.log(user);
        return done(null, user);
    });
}));

module.exports = router;