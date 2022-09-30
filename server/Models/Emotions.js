const db = require("mongoose");

const userSchema = db.Schema({
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

const Emotions = db.model('Emotions', userSchema);

module.exports = Emotions;
