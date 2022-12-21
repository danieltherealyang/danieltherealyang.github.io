import './home.css';
import { useState, useRef, useEffect } from 'react';
import { ResumeButton } from '../components/button';
import Header from '../components/home/header';

import Statement from '../components/home/statement';
import SectionTitle from '../components/home/sectiontitle';
import EntryRows from './work';

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
      <div style={{marginBottom: "6rem"}}></div>
    </div>
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