import express from "express";
import {
  createSource,
  updateSource,
  deleteSource,
  getSource,
  getAllSources,
} from "../controllers/sourceControllers.js";

import { LoginCheck, accessRole } from "../Middleware/commonMiddleware.js";

const router = express.Router();

// ================= CRUD ROUTES =================

// Create
router.post(
  "/",
  LoginCheck,
  accessRole(["editor", "admin", "user"]),
  createSource,
);

// Update
router.put("/:id", LoginCheck, accessRole(["editor", "admin"]), updateSource);

// Delete
router.delete("/:id", LoginCheck, accessRole(["admin"]), deleteSource);

// Get single
router.get("/:id", LoginCheck, getSource);

// Get all
router.get("/", LoginCheck, getAllSources);

export default router;
