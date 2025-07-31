import React, { useState, useEffect, useRef } from "react";
import "./styles/chatstyles.css";

function Chatpage() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "สวัสดี! มีอะไรให้ช่วยไหม?" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const res = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: "คุณคือผู้ช่วย AI ที่เป็นมิตร" },
            ...messages.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
            { role: "user", content: input }
          ]
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.response || "ขออภัย ฉันไม่เข้าใจ" }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "เกิดข้อผิดพลาดในการเชื่อมต่อ" }
      ]);
    }

    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-page-container">
      <div className="chat-box">
        <div className="chat-header">Dino Chatbot 🤖</div>
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-msg ${msg.sender === "user" ? "user" : "bot"}`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form className="chat-input-area" onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="พิมพ์ข้อความ..."
            autoFocus
          />
          <button type="submit">ส่ง</button>
        </form>
      </div>
    </div>
  );
}

export default Chatpage;
