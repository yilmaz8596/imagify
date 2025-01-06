import jwt from "jsonwebtoken";
import createHttpError from "http-errors";

export const authMiddleware = async (req, res, next) => {
  try {
    // Log all cookies to see what's being sent
    console.log("Received Cookies:", req.cookies);

    const accessToken = req.cookies.accessToken;

    // More detailed error handling
    if (!accessToken) {
      console.error("No access token found in cookies");
      return next(createHttpError.Unauthorized("No access token"));
    }

    console.log("Access Token:", accessToken);

    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      req.user = decoded;
      next();
    } catch (verifyError) {
      console.error("Token Verification Error:", verifyError.message);
      return next(createHttpError.Unauthorized("Invalid access token"));
    }
  } catch (error) {
    console.error("Middleware Error:", error);
    next(createHttpError.InternalServerError(error.message));
  }
};
