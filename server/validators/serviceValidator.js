const Joi = require('joi');

const createServiceSchema = Joi.object({
    name: Joi.string().min(2).max(80).trim().required().messages({
        'any.required': 'Name is required.',
        'string.min': 'Name must be at least 2 characters.',
        'string.max': 'Name must be 80 characters or less.'
    }),
    description: Joi.string().min(10).max(1000).trim().required().messages({
        'any.required': 'A description is required.',
        'string.min': 'Description must be at least 10 characters.',
        'string.max': 'Description must be 1000 characters or less.'
    }),
    image: Joi.string().uri().required().messages({
        'any.required': 'An image URL is required.',
        'string.uri': 'Image must be a valid URL.'
}),
    price: Joi.number().min(1).required().messages({
        'any.required': 'Price is required.',
        'number.base': 'Price must be a number.',
        'number.min': 'Price must be at least 1.'
}),
    durationMins: Joi.number().integer().min(1).required().messages({
        'any.required': 'Service duration is required.',
        'number.base': 'Duration must be a number.',
        'number.integer': 'Duration must be a whole number.',
        'number.min': 'Duration must be at least 1 minute.'
})
});

const updateServiceSchema = Joi.object({
    name: Joi.string().min(2).max(80).trim(),
    description: Joi.string().min(10).max(1000).trim(),
    image: Joi.string().uri(),
    price: Joi.number().min(1),
    durationMins: Joi.number().integer().min(1)
}).min(1).messages({'object.min': 'At least one field must be provided to update.'});

module.exports = {createServiceSchema, updateServiceSchema};