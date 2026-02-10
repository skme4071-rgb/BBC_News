import mongoose from "mongoose";



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

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);
// =================== Source Schema ===================
const SOURCE_ROLES = ["admin", "editor"];

const sourceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    url: { type: String, required: true },
    logo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Media",
      required: true,
    },
    type: {
      type: String,
      enum: ["newspaper", "tv", "blog", "agency", "social"],
      default: "newspaper",
    },

    role: {
      type: String,
      enum: SOURCE_ROLES,
      default: "editor",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);


// =================== Model Exports ===================
export const Source = mongoose.model("Source", sourceSchema);
export const Media = mongoose.model("Media", mediaSchema);
