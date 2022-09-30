const router = require("express").Router();
const Users = require("../../../Models/Users");

router.post("/", (req, res) => {
  let register_form = req.body;
  register_form["token"] = "UPS_account";
  register_form["friends"] = [];
  register_form["profile_url"] = "";
  register_form["location"] = { x: null, y: null };
  const user = new Users(register_form);

  user.save((err, doc) => {
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

module.exports = router;
