import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// =================== Media Schema ===================
const mediaSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["image", "video"],
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    cloudId: String,
    size: Number,
    mimeType: String,
    purpose: {
      type: String,
      enum: ["cover", "gallery", "thumbnail"],
      default: "gallery",
    },
  },
  { _id: false, timestamps: true },
);
const userSchema = new mongoose.Schema(
  {
    media: {
      type: [mediaSchema],
      default: [],
    },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^\S+@\S+\.\S+$/,
    },
    passwordHash: { type: String, required: true, select: false },
    role: {
      type: String,
      enum: ["reporter", "editor", "manager", "user", "admin"],
      default: "user",
    },
    isActive: { type: Boolean, default: true },
    lastLogin: Date,
  },
  { timestamps: true },
);

// 🔐 Pre-save hook for hashing password AND generating userId
userSchema.pre("save", async function () {
  // Hash password
  if (this.isModified("passwordHash")) {
    this.passwordHash = await bcrypt.hash(this.passwordHash, 12);
  }
});

// 🔁 Instance method to compare password
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

export default mongoose.model("User", userSchema);
