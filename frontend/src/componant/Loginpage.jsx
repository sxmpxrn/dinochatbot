import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/loginstyles.css";

function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Login Success!");
        navigate("/chat");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>

        {/* ปุ่ม Register */}
        <button
          type="button"
          className="register-btn"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
