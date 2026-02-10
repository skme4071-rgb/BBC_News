// image upload
// routes/upload.js
import express from "express";
import multer from "multer";
import path from "path";
import Media from "../models/Media.js";

const router = express.Router();

// Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype.startsWith("image/")) {
            cb(null, "uploads/images");
        } else if (file.mimetype.startsWith("video/")) {
            cb(null, "uploads/videos");
        } else {
            cb(new Error("Invalid file type"), null);
        }
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// ইমেজ আপলোড
router.post("/images", upload.single("image"), async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    try {
        const media = new Media({
            type: "image",
            filename: req.file.filename,
            path: req.file.path,
        });
        await media.save();
        res.json({ message: "Image uploaded successfully", media });
    } catch (error) {
        res.status(500).json({ message: "Error saving to DB", error });
    }
});

// ভিডিও আপলোড
router.post("/videos", upload.single("video"), async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    try {
        const media = new Media({
            type: "video",
            filename: req.file.filename,
            path: req.file.path,
        });
        await media.save();
        res.json({ message: "Video uploaded successfully", media });
    } catch (error) {
        res.status(500).json({ message: "Error saving to DB", error });
    }
});

export default router;
