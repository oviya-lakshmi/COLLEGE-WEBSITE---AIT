import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import NotFound from './pages/NotFound'; // Create this for 404 handling
import About from './pages/About';
import Faq from './pages/Faq';
import Rules from './pages/Rules';
import Contact from "./pages/Contact";
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Signup from './pages/Signup'; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;