import jwt from "jsonwebtoken";
import createError from "http-errors";
import User from "./../Models/userSchema.js";

//accessRole
export const accessRole = (roles = ["user"]) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "You are not authorized",
      });
    }
    next();
  };
};

// guard to protect routes that need role based authorization
export const evandKey = (req, res, next) => {
  if (res.locals.role === "user") {
    next(); // এখন ঠিক কাজ করবে
  } else {
    res.json({
      envet: "cowwrmlmf",
    });
  }
};

export const LoginCheck = (req, res, next) => {
  const token = req.cookies?.token; // cookie-parser parse করে দেবে

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: decoded.userId,
      email: decoded.email,
      role: decoded.role,
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid or expired" });
  }
};

export const isLogin = async (req, res, next) => {
  const token = req.cookies?.token;
  

  if (!token) {
    req.user = null;
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded;

    const user = await User.findOneAndUpdate(
      { email },
      { lastLogin: new Date() },
      { new: true },
    ).select("-passwordHash");

    if (!user) {
      req.user = null;
      return next();
    }

    req.user = {
      userId: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      lastLogin: user.lastLogin,
      media: user.media,
      role: user.role,
    };

    next();
  } catch (err) {
    req.user = null;
    next();
  }
};
