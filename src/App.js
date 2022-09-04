import './App.css';
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
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}

export default App;
