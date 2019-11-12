const { Schema, model } = require('mongoose');


const SmsSchema = new Schema({
    user:{
        type: String,
        required: true,

    },
    mensagem: {
        type:String,
        required:true,
    },

}, {
    timestamps: true,
});

module.exports = model('Sms', SmsSchema);