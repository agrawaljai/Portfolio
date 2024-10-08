import React from 'react';
import ReactDOM from 'react-dom/client';  // Import createRoot from 'react-dom/client'
import App from './App';
import { ThemeProvider } from './contexts/theme';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Use createRoot instead of ReactDOM.render
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
