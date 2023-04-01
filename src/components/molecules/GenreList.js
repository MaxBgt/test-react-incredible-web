import React from "react";

const GenreList = ({ genres }) => {
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre}>{genre}</li>
      ))}
    </ul>
  );
};

export default GenreList;
