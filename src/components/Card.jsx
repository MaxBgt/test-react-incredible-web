import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ movie }) => {
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
  const genreFinder = () => {
    return genreNames.map((genre) => <li key={genre}>{genre}</li>);
  };
  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={`affiche ${movie.title}`}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? <h5>Release Date : {movie.release_date}</h5> : null}
      <h4>
        {movie.vote_average.toFixed(1)}/10 <span>⭐</span>
      </h4>

      <ul>
        {movie.genre_ids
          ? genreFinder()
          : movie.genres.map((genre) => <li key={genre}>{genre.name}</li>)}
      </ul>

      {movie.overview ? <h3>Synopsis</h3> : ""}
      <p>{movie.overview}</p>
      {movie.genre_ids ? (
        <div
          className="btn"
          onClick={() =>
            handleClick(movie.id, movie.title, genreNames, movie.vote_average)
          }
        >
          View details
        </div>
      ) : (
        <div className="btn">Supprimer de la liste</div>
      )}
    </div>
  );
};

export default Card;
