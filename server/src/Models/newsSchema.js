import mongoose from "mongoose";







// =================== Media Schema ===================
const mediaSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["image", "video", "audio"],

    },
    url: {
      type: String,

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


// =================== News Schema ===================
const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },

    description: { type: String, trim: true, maxlength: 500 },
    summary: { type: String, trim: true, maxlength: 500 },

    author: String,
    category: { type: String, required: true },

    source: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Source",
      required: true,
    },

    media: {
      type: [mediaSchema],
      default: [],
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    tags: [String],

    publishedAt: Date,

    state: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  { timestamps: true },
);


// =================== Auto-publish middleware ===================
newsSchema.pre("save", function () {
  if (this.state === "published" && !this.publishedAt) {
    this.publishedAt = new Date();
  }
});

// =================== Model Exports ===================
export default mongoose.model("News", newsSchema);




// News.find()
//   .populate({
//     path: "source",
//     match: { type: "tv" },
//     select: "name logo url type",
//   });









// =================== Source Schema ===================
// const sourceSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     logo: {
//       type: String,
//       default: null,
//     },
//     url: {
//       type: String,
//       default: "",
//     },
//     type: {
//       type: String,
//       enum: ["newspaper", "tv", "blog", "agency", "social"],
//       default: "newspaper",
//     },
//   },
//   { _id: false }, // 🔑 important for embedded schema
// );
