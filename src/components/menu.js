import { MenuButton } from "./button";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './menu.css';

export function MenuBar() {
  return (
    <div className="menu-bar">
      <MenuPanel/>
    </div>
  );
}

function MenuPanel() {
  const location = useLocation();
  const [ homeActive, setHomeActive ] = useState();
  const [ portfolioActive, setPortfolioActive ] = useState();

  useEffect(() => {
    setHomeActive(location.pathname === '/');
    setPortfolioActive(location.pathname === '/portfolio');
  }, [location.pathname]);
  
  function setInactive() {
    setHomeActive(false);
    setPortfolioActive(false);
  }

  return (
    <Menu>
      <MenuContainer>
        <Link to="/">
          <MenuButton
            active={homeActive}
            onClick={() => {
              setInactive();
              setHomeActive(true);
            }}
          >
            Home
          </MenuButton>
        </Link>
      </MenuContainer>
      <MenuContainer>
        <Link to="/portfolio">
          <MenuButton
            active={portfolioActive}
            onClick={() => {
              setInactive();
              setPortfolioActive(true);
            }}
          >
            Portfolio
          </MenuButton>
        </Link>
      </MenuContainer>
      <MenuContainer>
        <MenuButton onClick={() => window.open("https://github.com/danieltherealyang", "_blank")}>Github</MenuButton>
      </MenuContainer>
    </Menu>
  );
}

function Menu(props) {
  return (
    <div className="menu">
      {props.children}
    </div>
  );
}

function MenuContainer(props) {
  return (
    <div className="menu-container">
      {props.children}
    </div>
  );
}