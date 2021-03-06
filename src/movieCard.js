import React from "react";

function MovieCard({ movie }) {
  // when passing props not {movie}:
  // const { movie } = props;
  // same as const movie = props.movie
  return (
    <>
      <div className="card" movie={movie}>
        <img
          alt={movie.title + " poster"}
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        />
        <div className="card--content">
          <h3 className="card--title">{movie.title}</h3>
          <p>
            <small>RELEASE DATE: {movie.release_date}</small>
          </p>
          <p>
            <small>RATING: {movie.vote_average}</small>
          </p>
          <p className="card--desc">{movie.overview}</p>
        </div>
      </div>
    </>
  );
}
export default MovieCard;
