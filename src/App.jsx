import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import { Route, Routes } from "react-router-dom";
import Chatbot from './pages/AI/Chatbot';
import Community from './pages/Community/Community';
import Profile from './pages/Profile/Profile';
import Login from './components/LandingPange/Login';
import Signup from './components/LandingPange/Signup';
import Auth from './pages/Auth/Auth';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    {/* <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} /> */}
    {/* <Route path="/" element={<Auth />} /> */}

    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/" element={<HeroSection />} />
    <Route path="/chatbot" element={<Chatbot/>} />
    <Route path="/community" element={<Community />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
    </>
  )
}

export default App
