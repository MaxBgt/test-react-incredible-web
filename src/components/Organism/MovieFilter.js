import React from "react";
import SearchForm from "../molecules/SearchForm";
import SortControl from "../molecules/SortControl";

const MovieFilter = () => {
  const initialSortGoodBad =
    typeof window !== "undefined" ? localStorage.getItem("sortGoodBad") : null;
  const initialSortByDate =
    typeof window !== "undefined" ? localStorage.getItem("sortByDate") : null;
  const initialCategory =
    typeof window !== "undefined" ? localStorage.getItem("category") : "";
  const initialRating =
    typeof window !== "undefined" ? localStorage.getItem("rating") : null;

  const [sortGoodBad, setSortGoodBad] = useState(initialSortGoodBad);
  const [sortByDate, setSortByDate] = useState(initialSortByDate);
  const [category, SetCategory] = useState(initialCategory);
  const [rating, setRating] = useState(initialRating);
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const moviesData = useSelector((state) => state.moviesData.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const GetMovies = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=17b1c4d68a51336bbc7cd07992ada264&query=${search}&language=us-EN`
      )
      .then((res) => dispatch(setMoviesData(res.data)));
  };

  useEffect(() => {
    const query = searchParams.get("query") || "code";
    const category = searchParams.get("category") || "";
    const rating = searchParams.get("rating") || "";
    if (query) {
      setSearch(query);
      setSubmittedSearch(query);
    } else {
      setSearch("");
      setSubmittedSearch("");
    }
    SetCategory(category);
    setRating(rating);
  }, [searchParams]);

  useEffect(() => {
    if (submittedSearch) {
      GetMovies();
      navigate(
        `?query=${submittedSearch}&category=${category}&rating=${rating}`
      );
    }
  }, [submittedSearch, navigate, category, rating]);

  const handleClick = (e) => {
    e.preventDefault();
    setSubmittedSearch(search);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sortGoodBad", sortGoodBad);
    }
  }, [sortGoodBad]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sortByDate", sortByDate);
    }
  }, [sortByDate]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("category", category);
    }
  }, [category]);

  return (
    <div className="form-component">
      <div className="form-container">
        <SearchForm
          search={search}
          setSearch={setSearch}
          handleClick={handleClick}
          category={category}
          setCategory={SetCategory}
        />
        <SortControl
          setSortGoodBad={setSortGoodBad}
          setSortByDate={setSortByDate}
        />
      </div>
      <div className="result">
        {moviesData?.results
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
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
            return b.vote_average - a.vote_average;
          })
          .slice(0, 8)
          .sort((a, b) => {
            if (sortByDate) {
              if (sortByDate === "oldestToNewest") {
                return new Date(a.release_date) - new Date(b.release_date);
              } else if (sortByDate === "newestToOldest") {
                return new Date(b.release_date) - new Date(a.release_date);
              }
            }
            return 0;
          })
          .map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default MovieFilter;
