import React from "react";
import { actors } from "../data";

function Actors() {
  const actorTotal = actors.map((actor, idx) => {
  const movieTotal = actor.movies.map((movie, idx) => {
      return <li key={idx}>{movie}</li>;
    });
    return (
      <div key={idx}>
        <p>{actor.name}</p>
        <ul>{movieTotal}</ul>
      </div>
    );
  });

  return (
    <>
      <h1>Actors Page</h1>
      {actorTotal}
    </>
  );
}

export default Actors;
