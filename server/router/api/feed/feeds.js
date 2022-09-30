const router = require("express").Router();
const passport = require("passport");
const Feeds = require("../../../Models/Feeds");
const LocalStrategy = require("passport-local").Strategy;

router.get("/", (req, res)=>{
    const x = req.param('x');
    const y = req.param('y');
    res.send('지도가 떠야하는 곳<br>' + 'x: ' + x + ' y: ' + y);
});

router.get('/:feed_id', (req, res)=>{
    const info = req.params.feed_id;
    // DB에서 정보 불러오기?
    res.send(info + '번 마커찔렀을때');
});

router.post('/', (req, res)=>{
  const ID = req.session.passport.user.account_id;
  const x = req.param('x');
  const y = req.param('y');
  let query = Feeds.visits.update({user_id: ID}, {$set: {
    location: {x: x, y: y}
  }});
});

router.post('/:feed_id/emotions', (req, res)=>{

});

passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/silpae",
});

module.exports = router;
