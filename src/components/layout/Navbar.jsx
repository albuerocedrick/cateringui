import React from 'react';
import { Search, Bell, Sun, Moon } from 'lucide-react';

const DashboardNavbar = ({ activeTab, theme, darkMode, setDarkMode, searchQuery, setSearchQuery }) => {
  return (
    <header className={`h-24 flex items-center justify-between px-8 md:px-12 border-b ${theme.border} ${theme.bg}`}>
      <div className="flex flex-col">
         <span className={`text-[10px] uppercase tracking-[0.2em] ${theme.subText}`}>Overview</span>
         <h2 className="text-2xl font-serif italic">{activeTab}</h2>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        {/* Search Bar */}
        <div className={`hidden md:flex items-center gap-3 px-4 py-2 rounded-full border ${theme.border} bg-transparent focus-within:border-[#C9A25D] transition-colors`}>
          <Search size={14} className="text-stone-400" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search schedule..." 
            className={`bg-transparent text-xs uppercase tracking-wider focus:outline-none w-48 placeholder-stone-400 ${theme.text}`}
          />
        </div>

        <button className={`relative p-2 ${theme.subText} hover:text-[#C9A25D] transition-colors`}>
          <Bell size={20} strokeWidth={1.5} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#C9A25D] rounded-full"></span>
        </button>

        {/* Theme Toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className={`p-2 rounded-full ${theme.subText} hover:text-[#C9A25D] transition-colors`}
        >
           {darkMode ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
        </button>
      </div>
    </header>
  );
};

export default DashboardNavbar;