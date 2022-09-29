const db = require("mongoose")
const bcrypt = require("bcrypt-nodejs")

const SALT_FACTOR = 5;

const userSchema = db.Schema({
    id: {
        type: String,
        minlength: 5
    },
    password: {
        type: String,
        minlength: 8
    },
    name: {
        type: String,
        maxlength: 50
    },
    nickname:{
        type: String,
        maxlength: 12
    },
    email:{
        type: String,
        maxlength: 100,
        trim: true,
        unique: 1
    },
    role: {
        type: Number,
        default: 0
    },
    token:{
        type:String,
    },
    tokenExp:{
        type: Number
    }
})

let noop = function(){};//모델이 저장되기("save") 전(.pre)에 실행되는 함수
userSchema.pre("save",function(done){
    var user = this;
    if(!user.isModified("password")){
        return done()
    }
    bcrypt.genSalt(SALT_FACTOR,function(err,salt){
        if(err) return done(err);
        bcrypt.hash(user.password,salt,noop,function(err,hashedPassword){
            if(err) return done(err);
            user.password = hashedPassword;
            done();
        })
    })
})

userSchema.methods.checkPassword = function(guess,done){
    bcrypt.compare(guess,this.password,function(err,isMatch){
        done(err,isMatch);
    })
}

const User = db.model('User', userSchema)

module.exports = User