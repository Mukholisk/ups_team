const db = require("mongoose");

const upcSchema = db.Schema(
  {
    feed_id: {
      type: String,
    },
    user: {
      name: String,
      profile_url: String,
    },
    body: {
      type: String,
      maxlength: 144,
    },
  },
  { versionKey: false }
);

const Upc = db.model("Upc", upcSchema);

module.exports = Upc;
