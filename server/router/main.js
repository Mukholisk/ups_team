const router = require("express").Router()
const ensure_auth = require("../passport/ensure_Auth")

router.get('/', function (req, res){
    res.send("로그인됐나?")
})
router.get('/silpae', function (req, res){
    res.send("로그인안됐나?")
})
router.get('/loginpilsoo', ensure_auth, function(req,res){
    res.send("용케 들어왔네요")
})
module.exports = router