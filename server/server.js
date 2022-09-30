const express = require("express"); // express 모듈
const session = require("express-session");
<<<<<<< HEAD
const passport = require('passport');
const db = require('./conn/conn_mongo');
=======
const passport = require("passport");
const db = require("./conn/conn_mongo");
>>>>>>> 4263544 (merge)
const bodyParser = require("body-parser");

const setUpPassport = require("./passport/config_passport");

<<<<<<< HEAD
const main = require('./router/main');
const naver = require('./router/auth/naver');
const login = require('./router/auth/login');
const register = require('./router/register/register');
=======
const main = require("./router/main");
const naver = require("./router/api/auth/naver");
const ups = require("./router/api/auth/login");
const register = require("./router/api/register/register");
>>>>>>> 4263544 (merge)
const app = express();
const PORT = 1128;

setUpPassport();

<<<<<<< HEAD
app.use(express.urlencoded({
	extended: true
}));
=======
app.use(
  express.urlencoded({
    extended: true,
  })
);
>>>>>>> 4263544 (merge)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    key: "sid",
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

<<<<<<< HEAD
app.use('/auth/naver', naver);
app.use('/auth/login', login);
app.use('/', main);
app.use('/register', register);

app.listen(PORT, () => {
    console.log(`Server is on PORT Number ${PORT}`);
=======
app.use("/api/auth/naver", naver);
app.use("/api/auth/ups", ups);
app.use("/", main);
app.use("/api/register", register);

app.listen(PORT, () => {
  console.log(`Server is on PORT Number ${PORT}`);
>>>>>>> 4263544 (merge)
});
