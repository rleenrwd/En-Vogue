const Booking = require('../models/Booking');
const Service = require('../models/Service');
const {createBookingSchema} = require('../validators/bookingValidator');

exports.createBooking = async (req, res) => {
    const {error, value} = createBookingSchema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true
    });

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        })
    }

    try {
        const {serviceId, date, time, customerName, phone, email, notes} = value;

        const service = await Service.findById(serviceId).lean();

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found.'
            })
        }

        const booking = await Booking.create({
            serviceId,
            date,
            time,
            customerName,
            phone,
            email,
            notes
        });
        
        return res.status(201).json({
            success: true,
            data: booking
        })

    } catch(err) {
        if (err.code === 11000) {
            return res.status(409).json({
                success: false,
                message: 'Slot already booked.'
            });
        } 

        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
        
    }
}