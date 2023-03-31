import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";

import axios from "axios";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=17b1c4d68a51336bbc7cd07992ada264&language=en-US`
        );
        setSelectedMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div className="movie-details-container">
      <h1 className="title_detail_page">Details</h1>
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
        <p>Not found</p>
      )}
    </div>
  );
};

export default MovieDetail;
