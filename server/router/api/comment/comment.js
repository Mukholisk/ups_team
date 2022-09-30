const router = require("express").Router();
const Comments = require("../../../Models/Comments");
const ensure_auth = require("../../../passport/ensure_Auth");

router.post("/", ensure_auth, (req, res) => {
  comment_form = req.body;
  comment_form["user_id"] = req.session.passport.user._id;
  const comments = new Comments(comment_form);

  comments.save((err, doc) => {
    if (err)
      return res.json({
        success: false,
        err,
      });
    return res.status(200).json({
      success: true,
    });
  });
});

router.get("/:feed_id", (req, res) => {
  Comments.find({ feed_id: req.params.feed_id }, (err, comments) => {
    if (err)
      return res.status(404).json({
        success: false,
        err,
      });
    if (comments == false)
      return res.status(404).json({
        success: false,
        err,
      });
    else return res.status(200).send(comments);
  });
});

module.exports = router;
