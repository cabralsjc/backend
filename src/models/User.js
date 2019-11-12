const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    user:{
        type: String,
        required: true,

    },
    
}, {
    timestamps: true,
});

module.exports = model('User', UserSchema);