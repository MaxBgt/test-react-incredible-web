import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesData } from "../store/features/app/moviesDataSlice";

const Form = () => {
  const [search, setSearch] = useState("code");
  const [sortGoodBad, setSortGoodBad] = useState(null);
  const [sortByDate, setSortByDate] = useState(null);
  const [category, SetCategory] = useState("");
  const moviesData = useSelector((state) => state.moviesData.movies);
  const dispatch = useDispatch();

  const GetMovies = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=17b1c4d68a51336bbc7cd07992ada264&query=${search}&language=us-EN`
      )
      .then((res) => dispatch(setMoviesData(res.data)));
  };
  useEffect(() => {
    GetMovies();
  }, [search]);

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
            Rating<span>➜</span>
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Rating<span>➜</span>
          </div>
        </div>
        <div className="btn-date-container">
          <div
            className="btn-date"
            id="oldest"
            onClick={() => setSortByDate("oldestToNewest")}
          >
            Oldest
          </div>
          <div
            className="btn-date"
            id="newest"
            onClick={() => setSortByDate("newestToOldest")}
          >
            Newest
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData?.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Form;

{
  /* {/* {moviesData */
}
// .filter((movie) => {
//   switch (category) {
//     case "Drama":
//       return movie.genre_ids.includes(18);
//     case "Action":
//       return movie.genre_ids.includes(28);
//     case "Adventure":
//       return movie.genre_ids.includes(12);
//     case "Animation":
//       return movie.genre_ids.includes(16);
//     case "Comedy":
//       return movie.genre_ids.includes(35);
//     case "Crime":
//       return movie.genre_ids.includes(80);
//     case "Documentary":
//       return movie.genre_ids.includes(99);
//     case "Mystery":
//       return movie.genre_ids.includes(9648);
//     case "Romance":
//       return movie.genre_ids.includes(10749);
//     case "Science fiction":
//       return movie.genre_ids.includes(878);
//     case "Thriller":
//       return movie.genre_ids.includes(53);
//     case "War":
//       return movie.genre_ids.includes(10752);
//     default:
//       return true;
//   }
// })
// .slice(0, 12)
// .slice(0, 12)
// .sort((a, b) => {
//   if (sortByDate) {
//     if (sortByDate === "oldestToNewest") {
//       return new Date(a.release_date) - new Date(b.release_date);
//     } else if (sortByDate === "newestToOldest") {
//       return new Date(b.release_date) - new Date(a.release_date);
//     }
//   }
//   return 0;
// })
// .sort((a, b) => {
//   if (sortGoodBad) {
//     if (sortGoodBad === "goodToBad") {
//       return b.vote_average - a.vote_average;
//     } else if (sortGoodBad === "badToGood") {
//       return a.vote_average - b.vote_average;
//     }
//   }
//   return 0;
// })
// .map((movie) => (
//   <Card movie={movie} key={movie.id} />
// ))} */}
