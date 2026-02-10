const Testimonial = require('../models/Testimonial');
const {createTestimonialSchema, updateTestimonialSchema} = require('../validators/testimonialValidator');


exports.getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find().lean();

        return res.status(200).json({
            success: true,
            data: testimonials
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
    }

}

exports.adminGetTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({createdAt: -1}).lean();

        return res.status(200).json({
            success: true,
            data: testimonials
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
    }

}
exports.adminCreateTestimonial = async (req, res) => {
    const {error, value} = createTestimonialSchema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true
    });

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }

    const {name, message} = value;

    try {
        
        const testimonial = await Testimonial.create({
            name,
            message
        });

        return res.status(201).json({
            success: true,
            data: testimonial
        });
    } catch(err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
    }
}
exports.adminUpdateTestimonial = async (req, res) => {

    const {id} = req.params;

 
    const {error, value} = updateTestimonialSchema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true
    });


    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }

    try {

        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id,
            value,
            {new: true, runValidators: true}
        );

        if (!updatedTestimonial) {
            return res.status(404).json({
                success: false,
                message: 'No testimonial found.'
            });
        }

        return res.status(200).json({
            success: true,
            data: updatedTestimonial
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
    }
}
exports.adminDeleteTestimonial = async (req, res) => {
    const {id} = req.params;

    try {
        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

        if (!deletedTestimonial) {
            return res.status(404).json({
                success: false,
                message: 'Testimonial not found.'
            });
        }

        return res.status(200).json({
            success: true,
            data: deletedTestimonial
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.'
        });
    }
}