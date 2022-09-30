const express = require("express"); // express 모듈
const session = require("express-session");
const passport = require("passport");
const db = require("./conn/conn_mongo");
const bodyParser = require("body-parser");

const setUpPassport = require("./passport/config_passport");

const main = require("./router/main");
const naver = require("./router/api/auth/naver");

const ups = require("./router/api/auth/ups");
const feeds = require("./router/api/feeds");
const register = require("./router/api/register/register");

const app = express();
const PORT = 1128;

setUpPassport();

app.use(
  express.urlencoded({
    extended: true,
  })
);

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

app.use("/api/auth/naver", naver);
app.use("/api/auth/ups", ups);
app.use("/", main);
app.use("/api/register", register);
app.use("/api/feeds", feeds);

app.listen(PORT, () => {
  console.log(`Server is on PORT Number ${PORT}`);
});
