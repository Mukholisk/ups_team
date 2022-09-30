const db = require("mongoose");

const emotionSchema = db.Schema({
    _id: {
        type: ObjectId,
        
    },
    feed_id: {
        type: ObjectId,
        
    },
    kinds: {
        good: [],
        bad: []
    },
});

const Emotions = db.model('Emotions', emotionSchema);

module.exports = Emotions;
