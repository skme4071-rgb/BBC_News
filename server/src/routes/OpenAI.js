// import express from "express";

// const router = express.Router();

// router.post("/ai-suggestion", async (req, res) => {
//   try {
//     const { content, action } = req.body;

//     if (!content) {
//       return res.status(400).json({ error: "Content is required" });
//     }

//     const promptMap = {
//       title: `Create 3 news headlines:\n${content}`,
//       grammar: `Fix grammar mistakes:\n${content}`,
//       summary: `Summarize this news in 2-3 sentences:\n${content}`,
//       tone: `Improve the tone professionally:\n${content}`,
//     };

//     const prompt = promptMap[action] || content;

//     const response = await fetch("http://localhost:11434/api/generate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         model: "phi",
//         prompt: prompt,
//         stream: false,
//       }),
//     });

//     const data = await response.json();

//     res.json({
//       suggestion: data.response || "No AI response",
//     });
//   } catch (err) {
//     console.error("Local AI error:", err);
//     res.status(500).json({
//       suggestion: "Error: Could not get AI response",
//     });
//   }
// });

// export default router;

// import express from "express";
// import OpenAI from "openai";

// const router = express.Router();

// router.post("/ai-suggestion", async (req, res) => {
//   try {
//     const { content, action } = req.body;

//     if (!content) {
//       return res.status(400).json({ error: "Content is required" });
//     }

//     const promptMap = {
//       title: `Create 3 news headlines:\n${content}`,
//       grammar: `Fix grammar mistakes:\n${content}`,
//       summary: `Summarize this news in 2-3 sentences:\n${content}`,
//       tone: `Improve the tone professionally:\n${content}`,
//     };

//     const prompt = promptMap[action] || content;

//     const openai = new OpenAI({
//       baseURL: "https://api.deepseek.com",
//       apiKey: process.env.DEEPSEEK_API_KEY,
//     });

//     const completion = await openai.chat.completions.create({
//       model: "deepseek-chat",
//       messages: [
//         { role: "system", content: "You are a helpful news editor assistant." },
//         { role: "user", content: prompt },
//       ],
//     });

//     res.json({
//       suggestion: completion.choices[0].message.content,
//     });
//   } catch (err) {
//     console.error("AI error:", err);
//     res.status(500).json({
//       suggestion: "Error: Could not get AI response",
//     });
//   }
// });

// export default router;

import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/ai-suggestion", async (req, res) => {
  try {
    const { content, action } = req.body;

    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }

    const promptMap = {
      title: `Create 3 news headlines:\n${content}`,
      grammar: `Fix grammar mistakes:\n${content}`,
      summary: `Summarize this news in 2-3 sentences:\n${content}`,
      tone: `Rewrite this professionally:\n${content}`,
    };

    const prompt = promptMap[action] || content;

    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      },
    );

    const data = await response.json();

    res.json({
      suggestion:
        data?.[0]?.summary_text || data?.generated_text || "No AI response",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI failed" });
  }
});

export default router;
