import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, fetchQuote } from "../redux/quote";

export default function KanyeQuoteView() {
  const quote = useSelector((state) => state.quote.quote);
  const favorites = useSelector((state) => state.quote.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const getQuote = () => {
    dispatch(fetchQuote());
  }

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      <p style={{ fontSize: "20px", fontWeight: 'bold' }}>{quote}</p>
      <button onClick={getQuote}>Get Quote</button>
      <button onClick={() => dispatch(addFavorite(quote))}
      >Add Favorite</button>
      {
        favorites.map((favorite, index) => {
          return <p key={index} style={{ margin: '0' }}>{favorite}</p>
        })
      }

    </section >
  );
}
