const db = require("mongoose");

const commentSchema = db.Schema(
  {
    feed_id: {
      type: String,
    },
    user_id: {
      type: String,
    },
    body: {
      type: String,
      maxlength: 144,
    },
  },
  { versionKey: false }
);

const Comments = db.model("Comments", commentSchema);

module.exports = Comments;
