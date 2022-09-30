const db = require("mongoose");

const emotionSchema = db.Schema({
    _id: {
        type: String,
        
    },
    feed_id: {
        type: String,
        
    },
    kinds: {
        good: [],
        bad: []
    },
});

const Emotions = db.model('Emotions', emotionSchema);

module.exports = Emotions;
