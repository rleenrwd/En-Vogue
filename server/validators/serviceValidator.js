const Joi = require('joi');

const createServiceSchema = Joi.object({
    name: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    image: Joi.string().uri().required(),
    price: Joi.number().min(1).required(),
    durationMins: Joi.number().integer().min(1).required()
});


module.exports = {createServiceSchema};