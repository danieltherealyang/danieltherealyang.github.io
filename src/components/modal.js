import './modal.css';
import { useState, useRef, useEffect, useCallback } from 'react';

export function CenterModal(props) {
  const { onClickOutside } = props;
  const visible = props.visible !== false;
  const visibleRef = useRef();
  useEffect(() => {
    visibleRef.current = visible;
  });
  const backRef = useRef();
  const bodyRef = useRef();
  const [ x, setX ] = useState();
  const [ y, setY ] = useState();
  const setXY = useCallback(() => {
    const x = (document.documentElement.clientWidth - bodyRef.current.clientWidth)/2;
    const y = window.pageYOffset + window.innerHeight/4 - bodyRef.current.clientHeight/2;
    setX(x);
    setY(y);
  }, []);
  useEffect(setXY, [visible, setXY]);
  const handleClickOutside = useCallback((event) => {
    if (backRef.current && backRef.current.contains(event.target))
      onClickOutside && onClickOutside();
  }, [onClickOutside]);
  useEffect(() => {
    const handleScroll = () => {if (visibleRef.current) setXY()};
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setXY);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setXY);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [setXY, handleClickOutside]);
  return (
    <div className='center-modal-container'>
      {props.children}
      <div
        ref={bodyRef}
        className={`modal-screen ${(visible) ? 'modal-fade-in' : 'modal-fade-out'}`}
        style={{
          top: y,
          left: x,
          visibility: (visible) ? 'visible' : 'hidden'
        }}
      >
        {props.content}
        <div
          ref={backRef}
          className='dim-background'
        />
      </div>
    </div>
  );
}

export function HoverModal(props) {
  const bodyRef = useRef();
  const modalRef = useRef();
  const [ visible, setVisible ] = useState(false);
  const visibility = (visible) ? 'visible' : 'hidden';
  const [ x, setX ] = useState();
  const [ y, setY ] = useState();
  const setXY = () => {
    const x = bodyRef.current.offsetLeft + (bodyRef.current.clientWidth - modalRef.current.clientWidth)/2;
    const y = bodyRef.current.offsetTop - modalRef.current.clientHeight;
    setX(x);
    setY(y);
  };
  useEffect(() => {
    setXY();
  }, [bodyRef.current, modalRef.current]);
  useEffect(() => {
    window.addEventListener('resize', setXY);
    return () => window.removeEventListener('resize', setXY);
  }, []);
  return (
    <div
      ref={bodyRef}
      onMouseEnter={() => {setVisible(true)}}
      onMouseLeave={() => {setVisible(false)}}
    >
      {props.children}
      <div
        ref={modalRef}
        style={{
          position: 'absolute',
          left: x,
          top: `calc(${y}px ${(props.gap) ? (' - ' + props.gap) : ''})`,
          zIndex: 10,
          visibility: visibility,
        }}
      >
        {props.content}
      </div>
    </div>
  );
}