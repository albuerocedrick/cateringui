// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Customer Pages
import Homepage from './pages/Customer/Homepage';
import Menu from './pages/Customer/Menu';
import Venue from './pages/Customer/Venue';
import Booking from './pages/Customer/Booking';
import Confirmation from './pages/Customer/Confirmation';

// Admin Pages
import Dashboard from './pages/Dashboard/Dashboard';
import Calendar from './pages/Events/Calendar'; // Ensure you created this file from the previous step

// Styles
import './App.css';
import Inventory from './pages/Inventory/Inventory';

// --- Simple Placeholder Component for Admin pages not yet built ---
// This prevents the app from crashing when clicking Sidebar links
const AdminPlaceholder = ({ title }) => (
  <div className="flex h-screen w-full items-center justify-center bg-[#FAFAFA] text-stone-900">
    <div className="text-center">
      <h1 className="font-serif text-4xl mb-4 italic">{title}</h1>
      <p className="text-xs tracking-widest uppercase text-stone-500">Module Under Development</p>
      <a href="/dashboard" className="block mt-8 text-xs underline hover:text-[#C9A25D]">Back to Dashboard</a>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- Customer Routes --- */}
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        
        {/* --- Admin/Management Routes --- */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events/calendar" element={<Calendar />} />
        <Route path="/inventory/inventory" element={<Inventory />} />
        
        {/* Placeholders for remaining Sidebar links */}
        <Route path="/clients" element={<AdminPlaceholder title="Client Records" />} />
        <Route path="/tasks" element={<AdminPlaceholder title="Task Manager" />} />
        <Route path="/kitchen" element={<AdminPlaceholder title="Kitchen & Prep" />} />
        
        <Route path="/venue-status" element={<AdminPlaceholder title="Venue Status" />} />
        <Route path="/finance" element={<AdminPlaceholder title="Financials" />} />
        <Route path="/finance/reports" element={<AdminPlaceholder title="Profit Reports" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;