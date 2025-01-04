// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Doctors from './Pages/Doctors';
import ApplyDoctorForm from './Pages/ApplyDoctorForm';
import YourAppointments from './Pages/YourAppointments';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/apply" element={<ApplyDoctorForm />} />
            <Route path="/appointments" element={<YourAppointments />} />
            <Route path="/contact" element={<ContactUs />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
