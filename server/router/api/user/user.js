const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    user_id: req.session.passport.user.user_id,
    name: req.session.passport.user.name,
    email: req.session.passport.user.email,
    profile_url: req.session.passport.user.name,
    token: req.session.passport.user.name,
    friends: req.session.passport.user.name,
  });
});

module.exports = router;
