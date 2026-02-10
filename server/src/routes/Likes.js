import express from "express";

const router = express.Router();

router.put("/", (req, res) => {

  const { likes } = req.query;

  res.json({ success: true, status: "ok", likes,  totalLikes: "100k" });
});
export default router;
