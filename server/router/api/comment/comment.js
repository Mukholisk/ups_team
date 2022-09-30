const router = require("express").Router();
const Comments = require("../../../Models/Comments");
const Upc = require("../../../Models/Upc");
const Users = require("../../../Models/Users");
const ensure_auth = require("../../../passport/ensure_Auth");

router.post("/", ensure_auth, (req, res) => {
  comment_form = req.body;
  comment_form.user = {};
  comment_form.user.name = req.session.passport.user.name;
  comment_form.user.profile_url = req.session.passport.user.profile_url;
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
  Comments.find({ feed_id: req.params.feed_id }, async (err, comments) => {
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
    else {
      return res.status(200).send(comments);
    }
  });
});

module.exports = router;
