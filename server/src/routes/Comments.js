import express from "express";

const router = express.Router();

// temporary in-memory store
let comments = [];

/**
 * GET comments by productId
 * /comments?prodactId=123
 */
router.get("/", (req, res) => {
  const { prodactId } = req.query;

  if (!prodactId) {
    return res.status(400).json({ message: "prodactId is required" });
  }

  const filteredComments = comments.filter((c) => c.productId === prodactId);

  res.json(filteredComments);
});

/**
 * POST new comment
 */
router.post("/", (req, res) => {
  const { productId, text, userId, name, avatar } = req.body;

  if (!productId || !text) {
    return res.status(400).json({ message: "productId and text are required" });
  }

  const newComment = {
    id: Date.now(),
    productId,
    text,
    userId: userId || null,
    name: name || "Anonymous",
    avatar: avatar || null,
    timestamp: new Date().toISOString(),
  };

  comments.push(newComment);

  res.status(201).json(newComment);
});

export default router;
