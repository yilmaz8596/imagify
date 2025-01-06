import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Token from "../models/token.model.js";
import User from "../models/user.model.js";

dotenv.config();

export class TokenService {
  static async generateTokens(userId) {
    const refreshToken = jwt.sign(
      { userId },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });

    this.invalidateUserTokens(userId);
    await this.saveTokens(userId, refreshToken, accessToken);
    return { refreshToken, accessToken };
  }

  static async saveTokens(userId, refreshToken, accessToken) {
    await Token.deleteMany({ user: userId });
    const token = await Token.create({
      user: userId,
      refreshToken,
      accessToken,
      refreshTokenExpiry: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      accessTokenExpiry: new Date(Date.now() + 15 * 60 * 1000),
    });

    await token.save();

    return token;
  }

  static async refreshTokens(refreshToken) {
    try {
      const tokenDoc = await Token.findOne({
        refreshToken,
      });

      if (!tokenDoc || !tokenDoc.isActive) {
        throw new Error("Invalid token");
      }

      const decoded = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );

      const { userId } = decoded;

      const user = await User.findById(userId);

      if (!user) {
        throw new Error("User not found");
      }

      const { refreshToken: newRefreshToken, accessToken: newAccessToken } =
        await this.generateTokens(user._id);

      return { refreshToken: newRefreshToken, accessToken: newAccessToken };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async validateAccessToken(accessToken) {
    try {
      const tokenDoc = await Token.findOne({ accessToken });
      if (!tokenDoc || !tokenDoc.isActive) {
        throw new Error("Invalid token");
      }

      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

      const { userId } = decoded;

      const user = await User.findById(userId);

      if (!user) {
        return false;
      } else {
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        return true;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async invalidateUserTokens(userId) {
    await Token.deleteMany({ user: userId });
  }
}
