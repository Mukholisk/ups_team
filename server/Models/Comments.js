const db = require("mongoose");

const userSchema = db.Schema({
    _id: {
        type: ObjectId,
        
    },
    feed_id: {
        type: ObjectId,
        
    },
    user_id: {
        type: ObjectId,
        
    },
    body:{
        type: String,
        maxlength: 144
    }
});

const Comments = db.model('Comments', userSchema);

module.exports = Comments;
