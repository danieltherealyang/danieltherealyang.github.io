import { MenuButton } from "./button";
import { useState } from "react";
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
  const [ homeActive, setHomeActive ] = useState(true);
  const [ portfolioActive, setPortfolioActive ] = useState(false);
  
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