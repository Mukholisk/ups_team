const db = require("mongoose");

const userSchema = db.Schema({
    _id: {
        type: ObjectId,
        
    },
    user_id: {
        type: ObjectId,
        
    },
    title: {
        type: String,
        maxlength: 30
    },
    body: {
        type: String,
        maxlength: 400
    },
    image_url: {
        type: String,

    },
    location: {
        x: Number,
        y: Number
    }
});

const Feeds = db.model('Feeds', userSchema);

module.exports = Feeds;
