import './App.css';
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Routes, Route } from 'react-router-dom';
import "@fontsource/inter";
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import { MenuBar } from './components/menu';

function App() {
  return (
    <div className="App">
      <header>
        <MenuBar/>
      </header>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
        </Routes>
      </ScrollToTop>
    </div>
  );
}

function ScrollToTop(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default App;
