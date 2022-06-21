import React from "react";
import { movies } from "../data";


// This component should render the text Movies Page in an <h1>, and make a new <div> for each 
// movie. The <div> should contain the movie's title, time and a <ul> with a list of its 
// genres, each within their own <li>.
function Movies (){

const shownMovies = movies.map((movie, idx)=>{
const genres = movie.genres.map((genre,idx)=>{
    return <li key={idx}>{genre}</li>
  })
  return (
    <div key={idx}>
     <p>Title: {movie.title}</p>
     <p>Time: {movie.time}</p>
     <ul>{genres}</ul>
    </div>
  )
})
  return <>
    <h1>Movies Page</h1>
    {shownMovies}
  </>;
}


export default Movies;
