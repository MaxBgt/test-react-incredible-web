import React from "react";
import Button from "../atoms/Button";

const MovieAction = ({ movie, handleClick }) => {
  return movie.genre_ids ? (
    <Button
      className="btn"
      onClick={() =>
        handleClick(movie.id, movie.title, movie.genreNames, movie.vote_average)
      }
    >
      View details
    </Button>
  ) : (
    <Button className="btn">Supprimer de la liste</Button>
  );
};

export default MovieAction;
