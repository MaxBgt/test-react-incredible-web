import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../actions/category.action";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("code");
  const [sortGoodBad, setSortGoodBad] = useState(null);
  const [category, SetCategory] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategoryFilter(category));
  }, [category]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=us-EN`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  // // const filterByCategory = () => {
  // //   if (category) {
  // //     moviesData.filter(moviesData.includes(category));
  // //   }
  // };

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Enter the title of a movie
            "
            id="search-input"
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type="submit"
            value="Search"
            onClick={(e) => e.preventDefault()}
          />
          <select
            name="catégorie"
            id="selectByCategory"
            onChange={(e) => {
              SetCategory(e.target.value);
            }}
          >
            <option value="">Select category</option>
            <option value="Drama">Drame</option>
            <option value="Action">Action</option>
            <option value="Animation">Animation</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Documentary">Documentary</option>
            <option value="Mystery">Mystery</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
            <option value="Science fiction">Science fiction</option>
            <option value="War">War</option>
          </select>
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top<span>➜</span>
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Flop<span>➜</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData
          .filter((movie) => {
            switch (category) {
              case "Drama":
                return movie.genre_ids.includes(18);
              case "Action":
                return movie.genre_ids.includes(28);
              case "Adventure":
                return movie.genre_ids.includes(12);
              case "Animation":
                return movie.genre_ids.includes(16);
              case "Comedy":
                return movie.genre_ids.includes(35);
              case "Crime":
                return movie.genre_ids.includes(80);
              case "Documentary":
                return movie.genre_ids.includes(99);
              case "Mystery":
                return movie.genre_ids.includes(9648);
              case "Romance":
                return movie.genre_ids.includes(10749);
              case "Science fiction":
                return movie.genre_ids.includes(878);
              case "Thriller":
                return movie.genre_ids.includes(53);
              case "War":
                return movie.genre_ids.includes(10752);
              default:
                return true;
            }
          })
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default Form;
