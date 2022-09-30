const router = require("express").Router();
const Feeds = require("../../../Models/Feeds");

router.get("/", (req, res) => {
  let min_x = parseFloat(req.params["x"]) - 0.002;
  let max_x = parseFloat(req.params["x"]) + 0.002;
  let min_y = parseFloat(req.params["y"]) - 0.0025;
  let max_y = parseFloat(req.params["y"]) + 0.0025;

  Feeds.find(
    {
      location: {
        x: { $gte: min_x, $lte: max_x },
        y: { $gte: min_y, $lte: max_y },
      },
    },
    (err, feeds_loc) => {
      if (err)
        return res.status(404).json({
          success: false,
          err,
        });
      return res.status(200).send(feeds_loc);
    }
  );
});

router.get("/:feed_id", (req, res) => {
  const feed_id = req.params.feed_id;

  Feeds.find({user_id: feed_id}, (err, feed)=>{
    if(err)
      return res.status(404).json({
        success: false,
        err,
      });
    return res.status(200).send(feed);
  });
});

router.post("/", (req, res) => {
  const ID = req.session.passport.user.account_id;
  const x = req.param("x");
  const y = req.param("y");
  let query = Feeds.visits.update(
    { user_id: ID },
    {
      $set: {
        location: { x: x, y: y },
      },
    }
  );
});

router.post("/:feed_id", (req, res) => {

});

module.exports = router;
