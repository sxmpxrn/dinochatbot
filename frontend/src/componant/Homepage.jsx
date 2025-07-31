import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/homestyles.css';
import dinoLogo from './assets/dino.jpg'; 


const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-root">
      <header className="home-header">
        <div className="home-header-left">
          <img src={dinoLogo} alt="Dino" className="dino-logo" /> {/* แก้ตรงนี้ */}
          <span className="dino-title">Dino Chatbot</span>
        </div>
        <div className="home-header-right">
          โปรเจคนักศึกษา
        </div>
      </header>
      <main className="home-main">
        <img src={dinoLogo} alt="Dino" className="dino-main-img" />
        <h1>โปรเจค Dino Chatbot</h1>
        <p className="home-desc">
          โปรเจคพัฒนาแชทบอทของนักศึกษา ที่ออกแบบมาเพื่อเรียนรู้การสร้าง AI Chatbot พร้อมแสดงความสามารถในการพัฒนาเทคโนโลยีสมัยใหม่
        </p>
        <button className="home-btn" onClick={() => navigate('/login')}>
          <span role="img" aria-label="chat">🚀</span> เริ่มแชทเลย!
        </button>
      </main>
    </div>
  );
};

export default Homepage;