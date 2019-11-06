import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode("darkmode", "true");

  console.log("darkMode from Navbar.jsx is", darkMode, "because it is the opposite from useEffect")

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log("Ran toggleMode from Navbar.jsx and set state of darkMode to:", darkMode)
    document.body.classList.toggle("dark-mode");
  };

  const darkModeLabel = {
    marginLeft: 'auto',
    marginRight: '10px',
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <h4 style={darkModeLabel}>Toggle Dark Mode</h4>
      <div className="dark-mode__toggle">
        <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
      </div>
    </nav>
  );
};

export default Navbar;
