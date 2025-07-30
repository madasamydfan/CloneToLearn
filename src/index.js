import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import NetflixSignIn from './pages/temp.jsx/NetflixSignIn'; // Assuming this is the sign-in page component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
      <Route path ="/" element={<App />} />
      <Route path="/signin" element={<NetflixSignIn />} />
      </Routes>
    </Router>
   
  </React.StrictMode>
);

reportWebVitals();
