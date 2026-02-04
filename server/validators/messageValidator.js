const Joi = require('joi');

const createMessageSchema = Joi.object({
    name: Joi.string().min(2).max(80).trim().required().messages({
        'any.required': 'Name is required.',
        'string.min': 'Name must be at least 2 characters.',
        'string.max': 'Name must be 80 characters or less.'
    }),
    phone: Joi.string().min(10).max(20).trim().required().messages({
        'any.required':'Phone number is required.',
        'string.min': 'Phone number must be at least 10 characters.',
        'string.max': 'Phone number must be 20 characters or less.'
    }),
    email: Joi.string().email().trim().required().messages({
        'any.required': 'Email is required.',
        'string.email': 'Email must be a valid email address: example@example.com.'
    }),
    message: Joi.string().min(10).max(500).trim().required().messages({
        'any.required': 'Message is required.',
        'string.min': 'Message must be at least 10 characters.',
        'string.max': 'Message must be 500 characters or less.'
    }),
});


module.exports = {createMessageSchema};