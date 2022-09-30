const db = require("mongoose");

db
.connect("mongodb+srv://khups:19981128@khups.qhqz2ox.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

module.exports = db;
