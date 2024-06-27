const mongoose = require("mongoose");

const userSchema =
  ({
    name: { type: String, default: "" },
    admin: { type: Boolean, default: false },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    isVerified: { type: Boolean, default: false },
    otp: {
      otp: { type: String, default: null },
      expiresIn: { type: Date, default: null },
    },
    tokens: {
      acessToken: { type: String, default: null },
      refreshToken: { type: String, default: null },
      expiryDate: { type: Date, default: null },
    },
    gender: { type: String, default: "" },
    dob: { type: Date, default: null },
    location: { type: String, default: "" }
  },
  {
    timestamps: true,
  });

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
