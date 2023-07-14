import React, { useEffect, useState } from "react";
import { Quotesimg } from "../Assets";

function Loader() {
  const [quote, setquote] = useState("");

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setquote(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <img className="w-[20vw] sm:w-[50vw] m-10" src={Quotesimg} alt="img" />

      <div className="max-w-[50vw] sm:max-w-[80vw]">
        <h3 className="w-full text-justify font-bold text-xl sm:text-sm text-headingColor">
          " {quote.text} "
        </h3>
        <p className="w-full flex justify-end pr-2 text-base sm:text-xs italic text-grey">
          - {quote.author}
        </p>
      </div>
      <div
        className="m-5 w-12 h-12 sm:w-10 sm:h-10 rounded-full animate-spin
                    border-8 sm:border-4 border-solid border-primary border-t-transparent"
      ></div>
    </div>
  );
}

export default Loader;
