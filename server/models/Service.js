const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema(
    {
    name: {type: String, minlength: 2, maxlength: 80, trim: true, required: true},
    description: {type: String, minlength: 10, maxlength: 1000, trim: true, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    durationMins: {type: Number, required: true},

    },
    {
    timestamps: true
    }
);


module.exports =  mongoose.model('Service', serviceSchema);