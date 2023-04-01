import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCardHeader from "../molecules/MovieCardHeader";
import GenreList from "../molecules/GenreList";
import MovieOverview from "../molecules/MovieOverview";
import MovieActions from "../../molecules/MovieActions";

const MovieCard = ({ movie }) => {
  const [genreNames, setGenreNames] = useState([]);
  const navigate = useNavigate();

  function formatTitleForUrl(title) {
    return title.replace(/ /g, "-");
  }

  const handleClick = (movieId, movieTitle, genreNames, rating) => {
    const genreNamesParam = genreNames.join(",");
    const formattedTitle = formatTitleForUrl(movieTitle);
    navigate(
      `/moviedetail/${movieId}query=${formattedTitle}category=${genreNamesParam}&rating=${rating}`
    );
  };

  const getGenreNames = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Adventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comedy`);
          break;
        case 80:
          genreArray.push(`Crime`);
          break;
        case 99:
          genreArray.push(`Documentary`);
          break;
        case 18:
          genreArray.push(`Drama`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 9648:
          genreArray.push(`Mystery`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science fiction`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`War`);
          break;
        default:
          break;
      }
    }
    return genreArray;
  };

  useEffect(() => {
    setGenreNames(getGenreNames());
  }, [movie.genre_ids]);

  return (
    <div className="card">
      <MovieCardHeader movie={movie} />
      <GenreList
        genres={
          movie.genre_ids ? genreNames : movie.genres.map((genre) => genre.name)
        }
      />
      <MovieOverview overview={movie.overview} />
      <MovieActions movie={movie} handleClick={handleClick} />
    </div>
  );
};

export default MovieCard;
