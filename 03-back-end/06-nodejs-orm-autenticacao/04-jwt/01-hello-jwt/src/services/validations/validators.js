const { bodySchema } = require("./schema");

const validateBody = (body) => {
  const { error } = bodySchema.validate(body);
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: '', message: '' };
};

module.exports = {
  validateBody,
}
