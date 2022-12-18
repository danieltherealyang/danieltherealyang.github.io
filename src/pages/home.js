import './home.css';
import { useState, useRef, useEffect } from 'react';
import Typing from 'react-animated-typewriter';
import { ResumeButton } from '../components/button';
import Header from '../components/home/header';

import Statement from '../components/home/statement';
import SectionTitle from '../components/home/sectiontitle';
import Entry from '../components/home/entry';
import EntryRow from '../components/home/entryrow';

import iivi from '../images/home/II-VI.png';
import ng from '../images/home/Northrop Grumman.png';

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="body">
        <Statement/>
        <ResumeButton
          onClick={() => 
            window.open("https://docs.google.com/document/d/112FhcxoiJw06J64VIu4VsvUBd4_dxEM3U4uA-bdSv4k/export?format=pdf", "__blank")
          }
        />
        <SectionTitle>PREVIOUS WORK</SectionTitle>
        <EntryRows/>
      </div>
    </div>
  );
}

function EntryRows() {
  const entries = [
    <IIVI/>,
    <Northrop/>,
    <ReactAT/>,
    <VGPlayer/>
  ]
  const rows = entries.reduce((rows, key, index) => { 
    return (index % 2 === 0 ? rows.push([key]) 
      : rows[rows.length-1].push(key)) && rows;
  }, []);
  return (
    <div className='entry-rows'>
      {rows.map((row, index) =>
        <EntryRow key={index}>
          {row[0]}
          {row[1]}
        </EntryRow>
      )}
    </div>
  );
}

function VGPlayer() {
  const text=`This application is a clone of the Youtube app but with the ability to play videos
  in the background with the screen off. I wrote it with React Native and used Expo to run the app.
  Source code is below.`;
  return (
    <Entry date='June 2022' title='VG Background Player'>
      <iframe width="420" height="315" src="https://www.youtube.com/embed/4n1HOOTnNhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p align="justify">{text}</p>
      <a href="https://github.com/danieltherealyang/Background-Player">Github</a>
    </Entry>
  );
}

function ReactAT() {
  const text=`While attempting to create a webpage in React, I wanted to have a simple animation on
  the page that types out a piece of text. I tried many different packages however none of them
  allowed me to achieve the effect I wanted. So, I decided to publish my own NPM package so I would
  never run into this problem again. After spending about two days figuring out how to publish code
  to NPM, my package is available for download under the name react-animated-typewriter.`;
  return (
      
    <Entry date='August 2022' title='React Animated Typewriter'>
      <div className='cursor'>
        <Typing
          steps={[
            'Hello!', 5000,
            'This animation was created with react-animated-typewriter,', 5000,
            'with an easy to use interface inspired by react-typical...', 5000,
            'but without any of the janky animation stuttering.', 5000,
            'Read more with the links below.', 30000
          ]}
          loop={Infinity}
          wrapper="text"
          typeDelay={25}
        />
      </div>
      <p align='justify'>{text}</p>
      <a href='https://github.com/danieltherealyang/react-animated-typewriter'>Github</a>
      |
      <a href='https://www.npmjs.com/package/react-animated-typewriter'>NPM</a>
    </Entry>
  );
}

function Northrop() {
  const text=`As part of the MQ-4C Triton Cyber team, the purpose of my work was to help secure the
  computer systems that would be deployed to control the Triton drone. I created a Python script
  to automate Jira ticket creation and updates by parsing STIG benchmarks and interfacing with the
  JIRA API to deploy changes, potentially saving hundreds of hours of work compared to manual checks.
  I also tested and implemented security benchmarks on sandboxed server images and ran ACAS vulnerability
  scans to improve OS and application security configurations`;
  return (
    <Entry date='June 2020 - August 2020' title='Intern at Northrop Grumman'>
      <img src={ng} alt='' height='64'/>
      <p align='justify'>{text}</p>
    </Entry>
  );
}

function IIVI() {
  const text=`I interned at the IT Security team, where I worked to create a full stack web app
  to report and record lost, damaged, or stolen company equipment. I also automated the migration of
  network information between different IT automation tools using Python to interface with REST APIs.
  In addition, I performed website penetration testing as well as vulnerability scan monitoring
  to find and remediate insecure system configurations.`;
  return (
    <Entry date='June 2022 - August 2022' title='Intern at II-VI, Inc.'>
      <img src={iivi} alt='' height='64'/>
      <p align='justify'>{text}</p>
    </Entry>
  );
}

// eslint-disable-next-line
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