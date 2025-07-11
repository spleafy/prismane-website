import { FC, useState, useEffect, use } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  cursor?: string;
}

const Typewriter: FC<TypewriterProps> = ({ text, speed, cursor }) => {
  const [letters, setLetters] = useState(text.split(''));

  const [current, setCurrent] = useState('');

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setLetters(text.split(''));
    setCounter(0);
    setCurrent('');
  }, [text]);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (letters.length > counter) {
          setCurrent(current + letters[counter]);
          setCounter(counter + 1);
        }
      },
      speed ? speed : 50
    );

    return () => clearTimeout(timeout);
  }, [counter, current, letters, speed]);

  return (
    <>
      {current}
      <div className="inline-block animate-blink text-inherit">
        {cursor ? cursor : '_'}
      </div>
    </>
  );
};

export default Typewriter;
