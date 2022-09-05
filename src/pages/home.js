import './home.css';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typical from 'react-typical';
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
import { ContactButton } from '../components/button';
import { DownloadButton } from '../components/button';
import { LinkButton } from '../components/button';

export default function Home() {
  const headerRef = useRef();
  const [ y, setY ] = useState();
  useEffect(() => {
    setY(headerRef.current.offsetTop);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {setY(headerRef.current.offsetTop)})
  }, []);
  return (
    <div>
      <div className="header" style={{height: `calc(100vh - ${y}px)`}} ref={headerRef}>
        <div className="row">
          <Introduction/>
          <Technologies/>
        </div>
        <div className="row contact-button-container">
          <ContactButton/>
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

function FadeIn(props) {
  const [ isVisible, setVisible ] = useState(false);
  const divRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(divRef.current);
      }
    });

    observer.observe(divRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className={`${(isVisible) ? 'fade-in' : ''} ${props.className}`} ref={divRef}>
      {props.children}
    </div>
  );
}

function Resume() {
  return (
    <FadeIn className="resume">
      <span
        style={{
          fontFamily: "Inter",
          fontWeight: "bold",
          fontSize: "36px"
        }}
      >
        Resume
      </span>
      <div className="button-container">
        <DownloadButton
          onClick={() => 
            window.open("https://docs.google.com/document/d/112FhcxoiJw06J64VIu4VsvUBd4_dxEM3U4uA-bdSv4k/export?format=pdf", "__blank")
          }
        />
      </div>
    </FadeIn>
  );
}

function Portfolio() {
  const navigate = useNavigate();
  return (
    <FadeIn className="portfolio">
      <span
        style={{
          fontFamily: "Inter",
          fontWeight: "bold",
          fontSize: "36px"
        }}
      >
        Portfolio
      </span>
      <div className="button-container">
        <LinkButton
          onClick={() =>
            navigate('portfolio')
          }
        />
      </div>
    </FadeIn>
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
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "14px",
            color: "white"
          }}
        >
          Hello my name is
        </span>
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: "bold",
            fontSize: "64px",
            color: "#9CF6FB"
          }}
        >
          Daniel Yang
        </span>
        <span
          style={{
            fontFamily: "Inter",
            fontSize: "24px",
            color: "white"
          }}
        >
          I am a <b>developer</b>
        </span>
        <span
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            color: "white",
            margin: "0.5rem 0"
          }}
        >
          I work with <span style={{"color": "#3FD2C7"}}><WorkAnimation/></span>
        </span>
      </div>
    </div>
  );
}

function WorkAnimation() {
  const wait = 1500;

  return (
    <Typical
      steps={[
        'React', wait,
        'C++', wait,
        'Java', wait,
        'Python', wait,
        'SQL', wait,
        'Knex', wait,
        'Express', wait,
        'Firebase', wait,
        'Postgres', wait,
        'Bash', wait
      ]}
      loop={Infinity}
      wrapper="b"
    />
  );
}