import React, { useState, useEffect } from "react";

function Scrollprogressbar() {
  const [scrolltop, setscrolltop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setscrolltop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-2 bg-gradient-to-r from-primary to-accent z-20 duration-300 ease-in-out"
        style={{ width: `${scrolltop}%` }}
      ></div>
    </>
  );
}

export default Scrollprogressbar;
