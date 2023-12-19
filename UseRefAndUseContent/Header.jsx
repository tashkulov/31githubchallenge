import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ background: theme === 'light' ? '#f0f0f0' : '#333', padding: '10px' }}>
      <h1>Theme App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;