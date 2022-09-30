const express = require("express"); // express 모듈
const session = require("express-session");
const passport = require('passport');
const db = require('./conn/conn_mongo');
const bodyParser = require("body-parser");

const setUpPassport = require("./passport/config_passport");

const main = require('./router/main');
const naver = require('./router/auth/naver');
const login = require('./router/auth/login');
const register = require('./router/register/register');
const app = express();
const PORT = 1128;

setUpPassport();

app.use(express.urlencoded({
	extended: true
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
	key: 'sid',
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth/naver', naver);
app.use('/auth/login', login);
app.use('/', main);
app.use('/register', register);

app.listen(PORT, () => {
    console.log(`Server is on PORT Number ${PORT}`);
});
