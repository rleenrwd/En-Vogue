const Testimonial = require('../models/Testimonal');
const {createTestimonialSchema, updateTestimonialSchema} = require('../validators/testimonialValidator');


exports.adminGetTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({createdAt: 1}).lean();

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