const db = require("mongoose");

const feedSchema = db.Schema({
  user_id: {
    type: String,
  },
  title: {
    type: String,
    maxlength: 30,
  },
  body: {
    type: String,
    maxlength: 400,
  },
  image_url: {
    type: String,
  },
  location: {
    x: Number,
    y: Number,
  },
});

const Feeds = db.model("Feeds", feedSchema);

module.exports = Feeds;
