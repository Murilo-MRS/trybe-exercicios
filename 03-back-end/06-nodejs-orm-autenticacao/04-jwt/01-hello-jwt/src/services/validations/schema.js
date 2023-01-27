const Joi = require('joi');

const bodySchema = Joi.object({
  username: Joi.string().min(5).alphanum().required().messages({
    'string.min': '"username" length must be 5 characters long',
    'string.required': '"username" is required',
  }),
  password: Joi.string().min(5).required().messages({
    'string.min': '"password" length must be 5 characters long',
    'string.required': '"password" is required',
  }),
});

module.exports = {
  bodySchema,
}