const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: {type: String, minlength: 2, maxlength: 50, required: true, trim: true},
    phone: {type: String, required: true, trim: true},
    email: {type: String, lowercase: true, trim: true, required: true},
    message: {type: String, required: true, minlength: 10, maxlength: 1000, trim: true },
},
{timestamps: true});



module.exports = mongoose.model('Message', messageSchema);