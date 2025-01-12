import User from "../models/user.model.js";
import createHttpError from "http-errors";
import { TokenService } from "../services/tokenService.js";
import { setCookies } from "../utils/setCookies.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      return next(createHttpError.BadRequest("Please fill in all fields"));
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return next(createHttpError.Conflict("User already exists"));
    }
    if (password !== confirmPassword) {
      return next(createHttpError.BadRequest("Passwords do not match"));
    }

    const user = await User.create({ name, email, password });
    await user.save();
    const { refreshToken, accessToken } = await TokenService.generateTokens(
      user._id
    );

    setCookies(res, refreshToken, accessToken);
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

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(createHttpError.BadRequest("Please fill in all fields"));
    }
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return next(createHttpError.NotFound("User not found"));
    }

    const isMatch = await userExists.matchPassword(password);
    if (!isMatch) {
      return next(createHttpError.Unauthorized("Invalid credentials"));
    }

    const { refreshToken, accessToken } = await TokenService.generateTokens(
      userExists._id
    );

    setCookies(res, refreshToken, accessToken);

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: userExists._id,
        name: userExists.name,
        email: userExists.email,
      },
    });
  } catch (error) {
    next(createHttpError.InternalServerError(error.message));
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie("refreshToken");
    res.clearCookie("accessToken");
    await TokenService.invalidateUserTokens(req.user._id);
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    next(createHttpError.InternalServerError(error.message));
  }
};

export const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return next(createHttpError.Unauthorized("Not logged in"));
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const storedToken = await TokenService.getRefreshToken(decoded.userId);

    if (refreshToken !== storedToken) {
      return next(createHttpError.Unauthorized("Invalid token"));
    }

    const accessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.status(200).json({ message: "Token refreshed successfully" });
  } catch (error) {
    next(createHttpError.InternalServerError(error.message));
  }
};
