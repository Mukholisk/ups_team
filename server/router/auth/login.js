const router = require("express").Router()
const passport = require("passport")

router.post('/', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/silpae'
}))

module.exports = router