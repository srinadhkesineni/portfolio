import React, { useEffect, useState } from 'react';

const titles = [
  "Software Engineer",
  "MERN Stack Developer",
  "Open Source Contributor",
  "Tech Enthusiast",
  "DevOps Advocate",
  "Competitive Programmer",
];

const TypewriterTitle = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];

      setText(prev =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      // Adjust typing speed
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 50 : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <span className="typewriter">{text}<span className="cursor">|</span></span>
  );
};

export default TypewriterTitle;
