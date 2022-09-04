import './home.css';
import { ReactComponent as Bash } from '../images/bash.svg';
import { ReactComponent as Cpp } from '../images/cpp.svg';
import { ReactComponent as Express } from '../images/express.svg';
import { ReactComponent as Firebase } from '../images/firebase.svg';
import { ReactComponent as Java } from '../images/java.svg';
import { ReactComponent as Knex } from '../images/knex.svg';
import { ReactComponent as Postgres } from '../images/postgres.svg';
import { ReactComponent as Python } from '../images/python.svg';
import { ReactComponent as React } from '../images/react.svg';
import { ReactComponent as Sql } from '../images/sql.svg';
import { DownloadButton } from '../components/button';
import { LinkButton } from '../components/button';

export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="row">
          <Introduction/>
          <Technologies/>
        </div>
      </div>
      <div className="body">
        <div className="row">
          <Resume/>
          <Portfolio/>
        </div>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div className="resume">
      <span
        style={{
          "font-family": "Inter",
          "font-weight": "bold",
          "font-size": "36px"
        }}
      >
        Resume
      </span>
      <div className="button-container">
        <DownloadButton/>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="portfolio">
      <span
        style={{
          "font-family": "Inter",
          "font-weight": "bold",
          "font-size": "36px"
        }}
      >
        Portfolio
      </span>
      <div className="button-container">
        <LinkButton/>
      </div>
    </div>
  );
}

function Technologies() {
  return (
    <div className="technologies">
      <span>Technologies</span>
      <div className="row logo-row">
        <React/>
        <Cpp/>
        <Python/>
        <Java/>
        <Sql/>
      </div>
      <div className="row logo-row">
        <Knex/>
        <Express/>
        <Firebase/>
        <Postgres/>
        <Bash/>
      </div>
    </div>
  );
}

function Introduction() {
  return (
    <div className="introduction">
      <div className="text-container">
        <span
          style={{
            "font-family": "Inter",
            "font-weight": 600,
            "font-size": "14px",
            "color": "white"
          }}
        >
          Hello my name is
        </span>
        <span
          style={{
            "font-family": "Inter",
            "font-weight": "bold",
            "font-size": "64px",
            "color": "#9CF6FB"
          }}
        >
          Daniel Yang
        </span>
        <span
          style={{
            "font-family": "Inter",
            "font-size": "24px",
            "color": "white"
          }}
        >
          I am a <b>developer</b>
        </span>
        <span
          style={{
            "font-family": "Inter",
            "font-size": "16px",
            "color": "white"
          }}
        >
          I work with <span style={{"color": "#3FD2C7"}}><b>Java</b></span>.
        </span>
      </div>
    </div>
  );
}