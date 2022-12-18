import '../../pages/home.css';
import { useRef, useEffect, useState } from 'react';
import { PhoneFilled, MailFilled, HomeFilled, ArrowDownOutlined } from '@ant-design/icons';
import { ReactComponent as Bash } from '../../images/bash.svg';
import { ReactComponent as Cpp } from '../../images/cpp.svg';
import { ReactComponent as Express } from '../../images/express.svg';
import { ReactComponent as Firebase } from '../../images/firebase.svg';
import { ReactComponent as Java } from '../../images/java.svg';
import { ReactComponent as Knex } from '../../images/knex.svg';
import { ReactComponent as Postgres } from '../../images/postgres.svg';
import { ReactComponent as Python } from '../../images/python.svg';
import { ReactComponent as React } from '../../images/react.svg';
import { ReactComponent as Sql } from '../../images/sql.svg';
import { ContactButton } from '../button';
import { HoverModal, CenterModal } from '../modal';
import Typing from 'react-animated-typewriter';

export default function Header() {
  const headerRef = useRef();
  const [ y, setY ] = useState();
  const [ contactVisible, setContactVisible ] = useState(false);
  const handleResize = () => {
    setY(headerRef.current.offsetTop);
  };
  useEffect(handleResize, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <div className="header"
      style={{
        height: (window.innerWidth > 750) ? `calc(100vh - ${y}px)` : ''
      }}
      ref={headerRef}
    >
      <div className="row">
        <Introduction/>
        <Technologies/>
      </div>
      <div className="contact-row-container">
        <div className="row" style={{justifyContent: 'center'}}>
          <CenterModal
            visible={contactVisible}
            content={<ContactInfo/>}
            onClickOutside={() => setContactVisible(false)}
          >
            <div className="contact-button-container">
              <ContactButton onClick={() => setContactVisible(true)}/>
            </div>
          </CenterModal>
        </div>
      </div>
      <ArrowDownOutlined className='white arrow-down'/>
    </div>
  );
}


function ContactInfo() {
  return (
    <div className="contact-card rainbow-glow">
      <span style={{fontSize: '18px'}}>Daniel Yang</span>
      <div className="contact-line-container">
        <div className="contact-line">
          <PhoneFilled className='white'/>
          <span>858-205-0368</span>
        </div>
        <div className="contact-line">
          <MailFilled className='white'/>
          <span>danielyangkang@gmail.com</span> 
        </div>
        <div className="contact-line">
          <HomeFilled className='white'/>
          <span>San Diego, CA</span>
        </div>
      </div>
    </div>
  );
}

function Technologies() {
  const gap = "2px";
  return (
    <div className="technologies">
      <div className="tech-container">
        <span>Technologies</span>
        <div className="logo-row">
          <HoverModal
            gap={gap}
            content={<div className="hover-modal">React</div>}
          >
            <React/>
          </HoverModal>
          <HoverModal
            gap={gap}
            content={<div className="hover-modal">C++</div>}
          >
            <Cpp/>
          </HoverModal>
          <HoverModal
            gap={gap}
            content={<div className="hover-modal">Python</div>}
          >
            <Python/>
          </HoverModal>
          <HoverModal
            gap={gap}
            content={<div className="hover-modal">Java</div>}
          >
            <Java/>
          </HoverModal>
          <HoverModal
            gap={gap}
            content={<div className="hover-modal">SQL</div>}
          >
            <Sql/>
          </HoverModal>
        </div>
        <div className="logo-row">
          <HoverModal
            gap={gap}
            content={<div className="hover-modal">Knex</div>}
          >
            <Knex/>
          </HoverModal>
          <HoverModal
            gap={gap}
            content={<div className="hover-modal">Express</div>}
          >
            <Express/>
          </HoverModal>
          <HoverModal
            gap={gap}
            content={<div className="hover-modal">Firebase</div>}
          >
            <Firebase/>
          </HoverModal>
          <HoverModal
            gap={gap}
            content={<div className="hover-modal">Postgres</div>}
          >
            <Postgres/>
          </HoverModal>
          <HoverModal
            gap={gap}
            content={<div className="hover-modal">Bash</div>}
          >
            <Bash/>
          </HoverModal>
        </div>
      </div>
    </div>
  );
}

function Introduction() {
  return (
    <div className="introduction">
      <div className="text-container">
        <span className="hello">
          Hello my name is
        </span>
        <span className="name">
          Daniel Yang
        </span>
        <span className="iam">
          I am a <b>developer</b>
        </span>
        <span className="workwith">
          I work with <span style={{"color": "#3FD2C7"}}><WorkAnimation/></span>
        </span>
      </div>
    </div>
  );
}

function WorkAnimation() {
  const wait = 1500;
  return (
    <Typing
      steps={[
        'React', wait,
        'C++', wait,
        'Python', wait,
        'Java', wait,
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