import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [quotes, setQuotes] = useState([]);
  function quoteGenerator() {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    quoteGenerator();
  }, []);

  return (
    <div className="quote-container">
      <p className="quote-content">{quotes.content}</p>
      <p className="quote-author">- {quotes.author}</p>
      <button className="new-quote-btn" onClick={quoteGenerator}>
        New Quote
      </button>
    </div>
  );
};
export default FetchData;
