const router = require("express").Router();
const Feeds = require("../../../Models/Feeds");
const Emoticons = require("../../../Models/Emotions");

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

router.post("/:feed_id/", (req, res) => {
  /* 클라이언트로부터 다음과 같이 감정표현을 담은 JSON을 받음
  { "emoticon": "good" }
  */
  const feed_id = req.params.feed_id;
  const ID = req.session.passport.user.account_id;
  const emoticon = req.param("emoticon");
  
  /*
  1. Emoticon에서 feed_id를 통해 검색
  2. kinds의 리스트에서 해당 감정표현을 했는지 찾음
    2-1: 어디도 없을 경우, 해당 감정표현 리스트에 ID 삽입
    2-2: 어딘가에 있을 경우, 어떤 리스트에 있는지 확인
      2-2-1: 같은 리스트인 경우, 리스트에서 제거
      2-2-2: 다른 리스트인 경우, 기존 리스트에서 제거하고 새 리스트에 저장
  */
  // 1
  Emoticons.find({feed_id: feed_id}, (err, feed)=>{
    if(err)
      return res.status(404).json({
        success: false,
        err,
      });
    // 2
    let name = '';
    let kinds = feed.kinds;

    for(let key in kinds){
      if(kinds[key].includes(ID)){
        name = key;
        break;
      }
    }

    if(name == ''){ // 2-1
      kinds[emoticon].push(ID);
    }
    else{ // 2-2
      // 2-2-1
      const idx = kinds[name].indexOf(ID);
      kinds[name].splice(idx, 1);
      // 2-2-2
      if(name != emoticon){
        kinds[emoticon].push(ID);
      }
    }
    return res.status(200).send(feed);
  });
  
  
});

module.exports = router;
