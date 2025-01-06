import mongoose from "mongoose";

export const tokenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshTokenExpiry: {
    type: Date,
    required: true,
  },
  accessTokenExpiry: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "30d",
  },
});

const Token = mongoose.model("Token", tokenSchema);

export default Token;
