const express = require("express")
const app = express()

const auth = require('./router/auth')
app.use('/auth', auth)

const main = require('./router/main')
app.use('/', main)

const session = require("express-session")

app.use(session({
	key: 'sid',
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));

const passport = require('passport')
app.use(passport.initialize())
app.use(passport.session())



const PORT = 1128

app.listen(PORT, () => {
    console.log(`Server is on PORT Number ${PORT}`)
})