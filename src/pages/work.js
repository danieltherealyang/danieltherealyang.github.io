import Typing from 'react-animated-typewriter';
import Entry from '../components/home/entry';
import EntryRow from '../components/home/entryrow';

import iivi from '../images/home/II-VI.png';
import ng from '../images/home/Northrop Grumman.png';

export default function EntryRows() {
  const entries = [
    <IIVI/>,
    <Northrop/>,
    <ReactAT/>,
    <VGPlayer/>,
    <SAF/>,
    <Donut/>,
    <OGL/>,
    <TerminalChat/>
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

function TerminalChat() {
  const text=`In order to learn more about TCP sockets, I built a chatroom application using Python.
  The program is a command line tool that runs in the terminal. After starting up a server instance,
  clients can connect to the server and transmit messages to other clients in real time.`;
  return (
    <Entry date='December 2021' title='Terminal Chatroom'>
      <div className="iframe-container">
        <iframe className="iframe" height="315" src="https://www.youtube.com/embed/iA0L_dZfal8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
      </div>
      <p align="justify">{text}</p>
      <a href="https://github.com/danieltherealyang/Projects/tree/master/Terminal%20Chatroom">Github</a>
    </Entry>
  );
}

function OGL() {
  const text=`This is a simple rendering engine created with OpenGL. I implemented basic movement and
  3D geometry rendering. The project was intended to be a barebones skeleton starter that a full scale
  game could be built off of. The source code is seperated into different classes that control the different
  components needed for a game, which can be later modified as needed.`
  return (
    <Entry date='January 2022' title='OpenGL Rendering Engine'>
      <div className="iframe-container">
        <iframe className="iframe" height="315" src="https://www.youtube.com/embed/MAvK7X7mXbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
      </div>
      <p align="justify">{text}</p>
      <a href="https://github.com/danieltherealyang/Projects/tree/master/OpenGL%20Game">Github</a>
    </Entry>
  );
}

function Donut() {
  const text=`I saw a video of a donut-shaped piece of code that displayed a spinning donut. I wanted
  to create my own implementation without any assistance starting from the fundamental linear algebra
  and surface parameterizations. This was the result. I used C++ to write the program and ncurses to
  display the ASCII rendering.`;
  return (
    <Entry date='March 2022' title='Spinning Donut'>
      <div className="iframe-container">
        <iframe className="iframe" height="315" src="https://www.youtube.com/embed/lAWffl28F4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
      </div>
      <p align="justify">{text}</p>
      <a href="https://github.com/danieltherealyang/Projects/tree/master/Spinning%20Donut">Github</a>
      |
      <a href="https://github.com/danieltherealyang/Projects/blob/master/Spinning%20Donut/Writeup/Writeup.pdf">Writeup</a>
    </Entry>
  );
}

function SAF() {
  const text=`For the final project of CS35L, I created this mobile application with the help of
  a few of my classmates. The app, which is called "Spot-a-Friend", has a bounty hunter theme where
  people can add other users as friends and join one or multiple groups. Each day, a target
  will be selected in each group and the goal is for the other group members to upload a picture
  of the target. The user's feed is comprised of all of these uploads for all of the groups the user
  is a part of. The app was written with React Native for the UI and Firebase as the backend.`;
  return (
    <Entry date='May 2022 - June 2022' title='Spot a Friend'>
      <div className="iframe-container">
        <iframe className="iframe" height="315" src="https://www.youtube.com/embed/rkdw_FZg-8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
      </div>
      <p align="justify">{text}</p>
      <a href="https://github.com/danieltherealyang/SpotAFriend-Backup">Github</a>
    </Entry>
  );
}

function VGPlayer() {
  const text=`This application is a clone of the Youtube app but with the ability to play videos
  in the background with the screen off. I wrote it with React Native and used Expo to run the app.
  Source code is below.`;
  return (
    <Entry date='June 2022' title='VG Background Player'>
      <div className="iframe-container">
        <iframe className="iframe" height="315" src="https://www.youtube.com/embed/4n1HOOTnNhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
      </div>
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