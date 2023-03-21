import React from "react";
import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();
  const moviesData = useSelector((state) => state.moviesData.movies);
  const selectedMovie = moviesData?.results.find(
    (movie) => movie.id === parseInt(movieId)
  );

  return (
    <div className="movie-details-container">
      {selectedMovie ? (
        <>
          <div className="head">
            <div className="head-title">
              <h1 className="movie-title ">{selectedMovie.title}</h1>
              <p className="synopsis ">{selectedMovie.overview}</p>
            </div>
            <img
              className="affiche "
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />
          </div>
          <div className="trailer">
            <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
          </div>
        </>
      ) : (
        <p>Film non trouvé</p>
      )}
    </div>
  );
};

export default MovieDetail;
