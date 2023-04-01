import React from "react";
import Images from "../atoms/Images";
import Text from "../atoms/Text";

const MovieCardHeader = ({ movie }) => {
  return (
    <>
      <Images
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={`affiche ${movie.title}`}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? <h5>Release Date : {movie.release_date}</h5> : null}
      <Text className="rating">
        {movie.vote_averagetoFixed(1)}/10 <span>⭐</span>
      </Text>
    </>
  );
};

export default MovieCardHeader;
