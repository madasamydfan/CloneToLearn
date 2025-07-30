import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReasonsPage from './pages/ReasonsPage';
import NetflixSignIn from './pages/temp.jsx/NetflixSignIn';
import TrendingPages from './pages/TrendingPages'
function App() {
  return (
    <>
     <HomePage></HomePage>
      <TrendingPages/>
     <ReasonsPage/>
     
    </>
   
  );
}

export default App;
