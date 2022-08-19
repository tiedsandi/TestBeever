import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuote } from "../redux/quote";

export default function PersonalQuoteView() {
  const [quote, setQuote] = React.useState("");
  const dispatch = useDispatch();
  const quoteList = useSelector((state) => state.quote.myQuotes);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addQuote(quote));
  }

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form >
        <input type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button
          type={`submit`}
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
      {quoteList.map((quote) => (
        <div key={quote}> {quote} </div>
      ))}
    </section>
  );
}
