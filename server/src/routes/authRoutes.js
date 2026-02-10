import express from "express";
import {
  registerValidator,
  loginValidator,
  validate,
} from "../Middleware/validator.js";
import {
  register,
  login,
  logout,
  isLoginControllers,
} from "../controllers/authControllers.js";
import { LoginCheck, isLogin } from "../Middleware/commonMiddleware.js";

const router = express.Router();

router.get("/isLogin", isLogin, isLoginControllers);

router.get("/logout", LoginCheck, logout);
router.post("/register", registerValidator(), validate, register);
router.post("/login", loginValidator(), validate, login);

export default router;
