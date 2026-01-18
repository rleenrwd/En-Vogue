const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
    time: {
        type: String,
        required: true,
        trim: true,
    },
    customerName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 80,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    notes: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    status: {
        type: String,
        enum: ['Confirmed', 'Cancelled'],
        default: 'Pending',
    },
    smsStatus: {
        type: String,
        enum: ['Pending', 'Sent', 'Failed', 'Skipped'],
        default: 'Pending',
    },
    smsError: {
        type: String,
        trim: true
    },

},
    {timestamps: true}
);

// Prevents double booking for the same time slot
// Says for every booking, make sure each combination of date and time are unique
// Creates an index sorted by dates in ascending order and within
// the same date, sorted by time in ascending order
bookingSchema.index({date: 1, time: 1}, {unique: true}); 

module.exports = mongoose.model('Booking', bookingSchema);
