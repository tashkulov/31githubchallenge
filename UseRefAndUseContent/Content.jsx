import React, { useContext } from 'react';
import {ThemeContext} from './ThemeProvider';

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ color: theme === 'light' ? '#333' : '#f0f0f0', padding: '20px' }}>
      <p>This is some content.</p>
    </div>
  );
};

export default Content;