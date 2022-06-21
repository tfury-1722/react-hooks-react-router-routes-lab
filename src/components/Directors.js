import React from "react";
import { directors } from "../data";

function Directors() {
  const totalDirectors = directors.map((director, idx) => {
    const allFilms = director.movies.map((movie, idx) => (
      <li key={idx}>{movie}</li>
    ));
    return (
      <div key={idx}>
        <h1>{director.name}</h1>
        <ul>{allFilms}</ul>
      </div>
    );
  })
  return (
    <>
      <h1>Directors Page</h1>
      {totalDirectors}
    </>
  );
}


export default Directors;
