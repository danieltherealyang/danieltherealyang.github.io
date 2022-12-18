import './button.css';

export function MenuButton(props) {
  return (
    <button style={props.style} className={"menu-button"} onClick={props.onClick}>{props.children}</button>
  );
}

export function ResumeButton(props) {
  return (
    <button className="big-button resume" onClick={props.onClick}>
      <div>Resume</div> 
    </button>
  );
}

export function ContactButton(props) {
  return (
    <button className="big-button contact" onClick={props.onClick}>
      <div>Contact</div>
    </button>
  );
}