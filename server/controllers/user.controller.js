import User from "../models/user.model.js";
import createHttpError from "http-errors";

export const register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      return next(createHttpError.BadRequest("Please fill in all fields"));
    }
    if (password !== confirmPassword) {
      return next(createHttpError.BadRequest("Passwords do not match"));
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return next(createHttpError.Conflict("User already exists"));
    }

    const user = await User.create({ name, email, password });
    await user.save();
    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(createHttpError.InternalServerError(error.message));
  }
};
