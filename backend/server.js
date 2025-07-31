import express from "express";
import cors from "cors";
import pool from "./db.js";
import { callAI } from "./ai.js"; // ฟังก์ชันเรียก AI

const app = express();
app.use(cors());
app.use(express.json());

// API สำหรับ Chat
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    // ดึง content ของข้อความทั้งหมดจาก frontend ไปส่งเข้า AI
    const response = await callAI(
      messages.map((m) => `${m.role}: ${m.content}`).join("\n")
    );

    res.json({ response });
  } catch (error) {
    console.error("Chat API error:", error);
    res.status(500).json({ response: "เกิดข้อผิดพลาด" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
