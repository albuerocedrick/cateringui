// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Customer/Homepage';
import Dashboard from './pages/Dashboard/Dashboard';
import Booking from './pages/Customer/Booking';
import Venue from './pages/Customer/Venue';
import Confirmation from './pages/Customer/Confirmation';
import Menu from './pages/Customer/Menu';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        
        {/* Dashboard Route (for admin) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;