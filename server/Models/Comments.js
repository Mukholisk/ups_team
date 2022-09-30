const db = require("mongoose");

const userSchema = db.Schema({
    _id: {
        type: String,
        
    },
    feed_id: {
        type: String,
        
    },
    user_id: {
        type: String,
        
    },
    body:{
        type: String,
        maxlength: 144
    }
});

const Comments = db.model('Comments', userSchema);

module.exports = Comments;
