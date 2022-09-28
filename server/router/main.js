const router = require("express").Router()
const Naverloginapi = require('../conn/naver_login')

router.get('/', function (req, res){
    res.send("로그인됐나?")
})
router.get('/silpae', function (req, res){
    res.send("로그인안됐나?")
})
module.exports = router