const Joi = require('joi');

const createServiceSchema = Joi.object({
    name: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    image: Joi.string().uri().required(),
    price: Joi.number().min(1).required(),
    durationMins: Joi.number().integer().min(1).required()
});

const updateServiceSchema = Joi.object({
    name: Joi.string().trim(),
    description: Joi.string().trim(),
    image: Joi.string().uri(),
    price: Joi.number().min(1),
    durationMins: Joi.number().integer().min(1)
}).min(1); //requires at least one field to be updated in order to save

module.exports = {createServiceSchema, updateServiceSchema};