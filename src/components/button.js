import './button.css';
import { ReactComponent as Download } from '../images/download.svg';
import { ReactComponent as Link } from '../images/link.svg';
import { ReactComponent as Send } from '../images/send.svg';

export function MenuButton(props) {
  return (
    <button style={props.style} className={"menu-button" + (props.active ? " menu-button-active" : "")} onClick={props.onClick}>{props.children}</button>
  );
}

export function DownloadButton(props) {
  return (
    <button className="big-button download" onClick={props.onClick}>
      <Download/>
      Download
    </button>
  );
}

export function LinkButton(props) {
  return (
    <button className="big-button link" onClick={props.onClick}>
      <Link/>
      Link
    </button>
  );
}

export function ContactButton(props) {
  return (
    <button className="big-button contact" onClick={props.onClick}>
      <Send/>
      Contact Me
    </button>
  );
}