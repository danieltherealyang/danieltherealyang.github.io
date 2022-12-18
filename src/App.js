import './App.css';
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Routes, Route } from 'react-router-dom';
import "@fontsource/inter";
import Home from './pages/home';
import { MenuBar } from './components/menu';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home/>}/>
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
