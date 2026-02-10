import User from "../Models/userSchema.js";
import createError from "http-errors";
import jwt from "jsonwebtoken";

// isLoginController
export const isLoginControllers = (req, res) => {


  if (!req.user) {
    return res.status(200).json({
      loggedIn: false,
      role: "Guest",
    });
  }

  res.status(200).json({
    loggedIn: true,
    ...req.user,
  });
};

// REGISTER
export const register = async (req, res, next) => {
  try {
    const role = res.locals.getRole;

    const { firstName, lastName, email, password } = req.body;

    // check email
    const exists = await User.findOne({ email });
    if (exists) throw createError(409, "Email already registered");

    const user = new User({
      role: role ?? "user",
      firstName,
      lastName,
      email,
      passwordHash: password,
    });


    await user.save();
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    next(err);
  }
};

// LOGIN
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+passwordHash");
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const { _id, firstName, lastName, media, email: userEmail, role } = user;

    const token = jwt.sign(
      {
        userId: _id,
        email: userEmail,
        role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
      },
    );

    user.lastLogin = new Date();
    await user.save();

    // 🔐 SET COOKIE HERE
    res.cookie("token", token, {
      httpOnly: true, // JS থেকে access নেই → security
      sameSite: "lax", // CSRF safe
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 দিন
    });

    return res.status(200).json({
      success: true,
      status: "ok",
      message: "Login successful",
      user: {
        userId: _id.toString(),
        firstName,
        lastName,
        email,
        lastLogin: user.lastLogin,
        media,
        role,
        loggedIn: true,
      },
    });
  } catch (err) {
    next(err);
  }
};

// LOGOUT
export const logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true, // production এ true
    sameSite: "strict", // or "lax"
  });

  res.json({
    success: true,
    status: "ok",
    user: {
      loggedIn: false,
    },
  });
};
