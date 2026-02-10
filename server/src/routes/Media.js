import express from "express";
import fs from "fs";
import multer from "multer";

import path from "path";
import { Media } from "../Models/models.js";
import { LoginCheck } from "../Middleware/commonMiddleware.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Upload Folder (main uploads)
const uploadDir = path.join(__dirname, "../../upload");

// Folder auto-create
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const router = express.Router();
// ===== Multer setup =====
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    file.type;
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const safeName =
      Date.now() +
      "-" +
      file.originalname
        .replace(/\s+/g, "_")
        .replace(/,/g, "")
        .replace(/[^\w.-]/g, "");

    cb(null, safeName);
  },
});

const upload = multer({ storage });

// ===== GET all media =====
router.get("/", LoginCheck, async (req, res) => {
  try {
    const media = await Media.find();
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== GET one media =====
// router.get("/:fileName", async (req, res) => {
//   try {
//     const indexPath = path.join(
//       res.locals.__dirname,
//       `../mediaUploads/${req.params.fileName}`,
//     );

//     if (!fs.existsSync(indexPath)) {
//       return res.status(404).send("file not found");
//     }

//     console.log(indexPath);
//     res.sendFile(indexPath);
//   } catch (error) {
//     res.status(500).json({ error: err.message });
//   }

//   // try {
//   //   const media = await Media.findById(req.params.id);
//   //   res.json(media);
//   // } catch (err) {
//   //   res.status(500).json({ error: err.message });
//   // }
// });
// router.get("/", (req, res) => {
//   try {
//     const fileName = decodeURIComponent(req.params[0]);

//     const mediaDir = path.resolve(__dirname, "../mediaUploads");
//     const filePath = path.join(mediaDir, fileName);

//     console.log("FINAL FILE PATH:", filePath);

//     if (!fs.existsSync(filePath)) {
//       return res.status(404).send("File not found");
//     }

//     res.sendFile(filePath);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// ===== POST upload media =====
router.post("/", LoginCheck, upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file received" });
    }

    const fileType = req.file.mimetype.startsWith("video") ? "video" : "image";

    const media = new Media({
      type: fileType,
      url: `${process.env.APP_URL}${process.env.PORT}/upload/${req.file.filename}`,
      cloudId: "",
      size: req.file.size,
      mimeType: req.file.mimetype,
      createdBy: req.user.id,
    });

    await media.save();
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== PUT update media =====
router.put("/:id", async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== DELETE media =====
router.delete("/:id", LoginCheck, async (req, res) => {
  try {
    await Media.findByIdAndDelete(req.params.id);
    res.json({ message: "Media deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

// router.get("/", (req, res) => {
//   res.json({ reqbody: "hgjghj" });
// });

// const upload = multer({ dest: "uploads/" });

//router.post("/", upload.single("file"), (req, res) => {
//   console.log("FILE:", req.file);
//   console.log("BODY:", req.body);

//   if (!req.file) {
//     return res.status(400).json({
//       success: false,
//       message: "No file received",
//     });
//   }

//   res.status(200).json({
//     success: true,
//     filename: req.file.filename,
//     originalName: req.file.originalname,
//     size: req.file.size,
//   });
// });
// import express from "express";
// import mongoose from "mongoose";
// import { Source, Media, News } from "./models.js"; // তোমার মডেল ফাইল

// const router = express();
// router.use(express.json());

// // =================== MongoDB Connect ===================
// mongoose
//   .connect("mongodb://127.0.0.1:27017/newsdb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// // =================== SOURCE API ===================

// // GET all sources
// router.get("/sources", async (req, res) => {
//   const sources = await Source.find();
//   res.json(sources);
// });

// // GET one source
// router.get("/sources/:id", async (req, res) => {
//   const source = await Source.findById(req.params.id);
//   res.json(source);
// });

// // POST create source
// router.post("/sources", async (req, res) => {
//   const source = new Source(req.body);
//   await source.save();
//   res.json(source);
// });

// // PUT update source
// router.put("/sources/:id", async (req, res) => {
//   const source = await Source.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json(source);
// });

// // DELETE source
// router.delete("/sources/:id", async (req, res) => {
//   await Source.findByIdAndDelete(req.params.id);
//   res.json({ message: "Source deleted" });
// });

// // =================== MEDIA API ===================

// // GET all media
// router.get("/media", async (req, res) => {
//   const media = await Media.find();
//   res.json(media);
// });

// // GET one media
// router.get("/media/:id", async (req, res) => {
//   const media = await Media.findById(req.params.id);
//   res.json(media);
// });

// // POST create media
// router.post("/media", async (req, res) => {
//   const media = new Media(req.body);
//   await media.save();
//   res.json(media);
// });

// // PUT update media
// router.put("/media/:id", async (req, res) => {
//   const media = await Media.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json(media);
// });

// // DELETE media
// router.delete("/media/:id", async (req, res) => {
//   await Media.findByIdAndDelete(req.params.id);
//   res.json({ message: "Media deleted" });
// });

// // =================== NEWS API ===================

// // GET all news
// router.get("/news", async (req, res) => {
//   const news = await News.find()
//     .populate("source")
//     .populate("media")
//     .populate("createdBy");
//   res.json(news);
// });

// // GET one news
// router.get("/news/:id", async (req, res) => {
//   const news = await News.findById(req.params.id)
//     .populate("source")
//     .populate("media")
//     .populate("createdBy");
//   res.json(news);
// });

// // POST create news
// router.post("/news", async (req, res) => {
//   const news = new News(req.body);
//   await news.save();
//   res.json(news);
// });

// // PUT update news
// router.put("/news/:id", async (req, res) => {
//   const news = await News.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json(news);
// });

// // DELETE news
// router.delete("/news/:id", async (req, res) => {
//   await News.findByIdAndDelete(req.params.id);
//   res.json({ message: "News deleted" });
// });

// // =================== Server Start ===================
// const PORT = 5000;
// router.listen(PORT, () =>
//   console.log(`Server running on http://localhost:${PORT}
