import React from "react";



const Card = ({movie}) => {
  return (
    <div className="card">
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
      <h2>{movie.Title}</h2>
    </div>
  );
};

export default Card;
