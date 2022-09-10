import './typing.css';
import { useState, useEffect, useCallback } from 'react';

export default function Typing(props) {
  const Tag = (props.wrapper) ? props.wrapper : 'span';
  const steps = props.steps;
  const iterations = (props.loop) ? props.loop : 1;
  const typeDelay = (props.typeDelay) ? props.typeDelay : 50;
  const deleteDelay = (props.deleteDelay) ? props.deleteDelay : 50;
  const [ current, setCurrent ] = useState();
  const getFrame = (word, frame) => {
    return word.substring(0, frame);
  };
  const animateWord = useCallback(async (word, wait=1000) => {
    const length = word.length;
    let i = 0;
    await asyncInterval((terminate) => {
      i++;
      if (i > length) {
        i--;
        terminate();
        return;
      }
      const frame = getFrame(word, i);
      setCurrent(frame);
    }, typeDelay)
    .then(async () => {await sleep(wait);})
    .then(async () => {
      await asyncInterval((terminate) => {
        i--;
        if (i < 0) {
          terminate();
          return;
        }
        const frame = getFrame(word, i);
        setCurrent(frame);
      }, deleteDelay);
    });
  }, []);

  useEffect(() => {
    const animate = async () => {
      for (let iter = 0; iter < iterations; iter++) {
        let i = 0;
        while (i < steps.length) {
          let increment = 1;
          if (typeof(steps[i + 1]) == 'number') {
            increment = 2;
            await animateWord(steps[i], steps[i + 1]);
          } else
            await animateWord(steps[i]);
          i += increment;
        }
      }
    };
    animate();
  }, []);
  
  return (
    <Tag className='tag'>
      {current}
      <div className='cursor'/>
    </Tag>
  );
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncInterval(callback, ms) {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      callback(() => {clearInterval(interval); resolve();});
    }, ms);
  });
}