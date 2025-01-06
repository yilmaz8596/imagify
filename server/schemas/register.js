import Joi from "joi";
import createHttpError from "http-errors";

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.min": "Name must be at least 3 characters long",
    "string.max": "Name cannot be longer than 30 characters",
    "any.required": "Name is required",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email cannot be empty",
      "any.required": "Email is required",
    }),
  password: Joi.string()
    .min(6)
    .max(50)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .messages({
      "string.min": "Password must be at least 6 characters long",
      "string.max": "Password cannot be longer than 30 characters",
      "string.pattern.base": "Password must contain only letters and numbers",
      "any.required": "Password is required",
    }),
  confirmPassword: Joi.ref("password"),
});

export const validateRegister = async (req, res, next) => {
  const { error } = registerSchema.validate(req.body);

  if (error) {
    const errors = error.details.reduce((acc, curr) => {
      acc[curr.path[0]] = curr.message;
      return acc;
    }, {});
    return next(createHttpError(400, { errors }));
  }
  next();
};
