import Footer from './pages/footer';
import './App.css';
import Login from './loginBox';
import LoginBottom from './loginBottom';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrendingPages from './pages/TrendingPages';
import Language from './pages/language';
import NetflixSignIn from './pages/temp.jsx/NetflixSignIn';
import ReasonsPage from './pages/ReasonsPage';
import SignInButton from './signinbutton';
// import NetflixSignIn from './pages/temp.jsx/NetflixSignIn';
import FAQList from './pages/FAQList';

function App() {
  return (
    <>
     <HomePage></HomePage>
     <TrendingPages></TrendingPages>
     <ReasonsPage></ReasonsPage>
     <FAQList></FAQList>
     <LoginBottom></LoginBottom>
     <Footer></Footer>

    {/* <NetflixSignIn></NetflixSignIn> */}
</>
  )
}
export default App;
