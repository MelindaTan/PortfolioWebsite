import React, { useEffect, useState } from 'react';

export default function TypewriterGreeting({ greeting = 'Hi there, I’m Melinda 👋' }: { greeting?: string }) {
  const [text, setText] = useState(greeting);

  useEffect(() => {
    const letters = Array.from(greeting);
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setTimeout>;
    let count = 0;
    let deleting = false;

    const step = () => {
      count += deleting ? -1 : 1;
      setText(letters.slice(0, count).join(''));
      let delay = deleting ? 45 : 95;
      if (count === letters.length) { deleting = true; delay = 2200; }
      if (count === 0) { deleting = false; delay = 600; }
      timer = setTimeout(step, delay);
    };
    const restart = () => {
      clearTimeout(timer);
      if (preference.matches) { setText(greeting); return; }
      count = 0;
      deleting = false;
      setText('');
      timer = setTimeout(step, 400);
    };
    restart();
    preference.addEventListener('change', restart);
    return () => {
      clearTimeout(timer);
      preference.removeEventListener('change', restart);
    };
  }, [greeting]);

  return <span className="typewriter-greeting">
    <span className="typewriter-accessible">{greeting}</span>
    <span className="typewriter-space" aria-hidden="true">{greeting}<span className="typewriter-cursor">|</span></span>
    <span className="typewriter-text" aria-hidden="true">{text}<span className="typewriter-cursor">|</span></span>
  </span>;
}
