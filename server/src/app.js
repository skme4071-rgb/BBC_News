import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
// Config files
import "./config/env.js";
import "./config/db.js";



//  ES Modules __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Socket.io
import socket from "./socket.js";

// Error handlers
import errorHandler from "./Middleware/errorHender.js";

// API Routes
import auth from "./routes/authRoutes.js";
import Comments from "./routes/Comments.js";
import Likes from "./routes/Likes.js";
import Articles from "./routes/Articles.js";
import OpenAI from "./routes/OpenAI.js";
import Media from "./routes/Media.js";
import Source from "./routes/configSource.js";






// Initialize app
const app = express();
const server = http.createServer(app);

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// Media uploads
app.use("/upload", express.static(path.join(__dirname, "../upload")));

// Public folder (if any)
// app.use(express.static(path.join(__dirname, "../public")));

// React build
const clientDist = path.join(__dirname, "../../client/dist");
app.use(express.static(clientDist));

// ES Modules __dirname fix
app.use((req, res, next) => {
  res.locals.__dirname = __dirname;
  next();
});
// 1️⃣ API routes (must come before React catch-all)
app.use("/Auth/User", auth);
app.use("/Comments", Comments);
app.use("/Likes", Likes);
app.use("/Articles", Articles);
app.use("/OpenAI", OpenAI);
app.use("/Media", Media);
app.use("/Source", Source);
// 2️⃣ Serve React build static files

// 3️⃣ Test route
app.get("/headline", (req, res) => {
  setTimeout(() => {
    res.json([
      { message: "adoption, marking a pivotal moment in global" },
      { message: "adoption, marking a pivotal moment in global" },
      { message: "adoption, marking a pivotal moment in global" },
    ]);
  }, 2000);
});

// ✅ React SPA fallback LAST
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

socket(server);

// 6️⃣ Error handlers
app.use(errorHandler.notFound);
app.use(errorHandler.common);

export default server;
