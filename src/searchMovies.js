import React from "react";

function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting)");
  };
  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Enter the void"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchMovies;
