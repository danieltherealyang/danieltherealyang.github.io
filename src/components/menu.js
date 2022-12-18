import { MenuButton } from './button';
import { LinkedinFilled, GithubFilled } from '@ant-design/icons';
import './menu.css';

export function MenuBar() {
  return (
    <div className="menu-bar">
      <MenuPanel/>
    </div>
  );
}

function MenuPanel() {
  return (
    <Menu>
      <MenuContainer>
        <MenuButton
          onClick={() => window.open("https://www.linkedin.com/in/daniel-yang-159b9718a/", "_blank")}
        >
         <LinkedinFilled/> 
        </MenuButton>
      </MenuContainer>
      <MenuContainer>
        <MenuButton
          onClick={() => window.open("https://github.com/danieltherealyang", "_blank")}
        >
          <GithubFilled/>
        </MenuButton>
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