import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './componant/Homepage'
import Registerpage from './componant/Registerpage'
import LoginPage from './componant/loginpage'
import Chatpage from './componant/Chatpage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Registerpage/>} />
        <Route path="/chat" element={<Chatpage/>} />
      </Routes>
    </Router>
  )
}

export default App