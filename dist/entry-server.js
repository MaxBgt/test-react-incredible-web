import * as jsxRuntime from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { useNavigate, useSearchParams, useParams, Link, Routes, Route } from "react-router-dom";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import ReactPlayer from "react-player/youtube.js";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const _userList = "";
function About$3() {
  return /* @__PURE__ */ jsxs("div", { className: "user-list-page", children: [
    /* @__PURE__ */ jsx("h2", { children: "About" }),
    /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, et? Omnis iure ex, neque nihil fugit aut quos suscipit voluptatem expedita qui officiis excepturi eveniet molestiae dignissimos quod cumque laudantium nisi magnam officia obcaecati incidunt vel! Labore, odio ratione. Aliquam necessitatibus adipisci minus, distinctio aspernatur illo nam pariatur sint laborum itaque velit possimus, repudiandae labore quis neque incidunt earum sapiente a omnis perferendis reprehenderit doloribus. Esse distinctio quis est tempore earum incidunt, reprehenderit temporibus beatae saepe amet suscipit, alias itaque tempora, sequi necessitatibus eos eveniet accusantium. Mollitia delectus asperiores facere iusto animi culpa, modi placeat aspernatur illum explicabo, eveniet dolorem nulla ex quibusdam! Error saepe rem molestiae dolorum libero animi mollitia officia velit ea enim quasi explicabo, adipisci minus eos perspiciatis est reiciendis totam esse at rerum neque optio quam porro? Quas autem officiis dolore, quis ab quia aspernatur ipsam fugit distinctio. Dolor tempore, suscipit iure numquam maxime sed nobis vero non ex quas soluta itaque molestias ipsum nihil dignissimos qui. Nam vel sequi accusantium. Tempore ea, ullam praesentium sequi saepe eligendi reiciendis iure voluptate aperiam facilis fugit quis, velit incidunt officiis commodi vero. Reprehenderit repudiandae nam error facere non accusantium? Ab, dolorem assumenda eveniet dolores facere laboriosam earum fugit." })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About$3
}, Symbol.toStringTag, { value: "Module" }));
function About$2() {
  return /* @__PURE__ */ jsxs("div", { className: "user-list-page", children: [
    /* @__PURE__ */ jsx("h2", { children: "About Us" }),
    /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, et? Omnis iure ex, neque nihil fugit aut quos suscipit voluptatem expedita qui officiis excepturi eveniet molestiae dignissimos quod cumque laudantium nisi magnam officia obcaecati incidunt vel! Labore, odio ratione. Aliquam necessitatibus adipisci minus, distinctio aspernatur illo nam pariatur sint laborum itaque velit possimus, repudiandae labore quis neque incidunt earum sapiente a omnis perferendis reprehenderit doloribus. Esse distinctio quis est tempore earum incidunt, reprehenderit temporibus beatae saepe amet suscipit, alias itaque tempora, sequi necessitatibus eos eveniet accusantium. Mollitia delectus asperiores facere iusto animi culpa, modi placeat aspernatur illum explicabo, eveniet dolorem nulla ex quibusdam! Error saepe rem molestiae dolorum libero animi mollitia officia velit ea enim quasi explicabo, adipisci minus eos perspiciatis est reiciendis totam esse at rerum neque optio quam porro? Quas autem officiis dolore, quis ab quia aspernatur ipsam fugit distinctio. Dolor tempore, suscipit iure numquam maxime sed nobis vero non ex quas soluta itaque molestias ipsum nihil dignissimos qui. Nam vel sequi accusantium. Tempore ea, ullam praesentium sequi saepe eligendi reiciendis iure voluptate aperiam facilis fugit quis, velit incidunt officiis commodi vero. Reprehenderit repudiandae nam error facere non accusantium? Ab, dolorem assumenda eveniet dolores facere laboriosam earum fugit." })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About$2
}, Symbol.toStringTag, { value: "Module" }));
function About$1() {
  return /* @__PURE__ */ jsxs("div", { className: "user-list-page", children: [
    /* @__PURE__ */ jsx("h2", { children: "About Us" }),
    /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, et? Omnis iure ex, neque nihil fugit aut quos suscipit voluptatem expedita qui officiis excepturi eveniet molestiae dignissimos quod cumque laudantium nisi magnam officia obcaecati incidunt vel! Labore, odio ratione. Aliquam necessitatibus adipisci minus, distinctio aspernatur illo nam pariatur sint laborum itaque velit possimus, repudiandae labore quis neque incidunt earum sapiente a omnis perferendis reprehenderit doloribus. Esse distinctio quis est tempore earum incidunt, reprehenderit temporibus beatae saepe amet suscipit, alias itaque tempora, sequi necessitatibus eos eveniet accusantium. Mollitia delectus asperiores facere iusto animi culpa, modi placeat aspernatur illum explicabo, eveniet dolorem nulla ex quibusdam! Error saepe rem molestiae dolorum libero animi mollitia officia velit ea enim quasi explicabo, adipisci minus eos perspiciatis est reiciendis totam esse at rerum neque optio quam porro? Quas autem officiis dolore, quis ab quia aspernatur ipsam fugit distinctio. Dolor tempore, suscipit iure numquam maxime sed nobis vero non ex quas soluta itaque molestias ipsum nihil dignissimos qui. Nam vel sequi accusantium. Tempore ea, ullam praesentium sequi saepe eligendi reiciendis iure voluptate aperiam facilis fugit quis, velit incidunt officiis commodi vero. Reprehenderit repudiandae nam error facere non accusantium? Ab, dolorem assumenda eveniet dolores facere laboriosam earum fugit." })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About$1
}, Symbol.toStringTag, { value: "Module" }));
function About() {
  return /* @__PURE__ */ jsxs("div", { className: "user-list-page", children: [
    /* @__PURE__ */ jsx("h2", { children: "About Us" }),
    /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, et? Omnis iure ex, neque nihil fugit aut quos suscipit voluptatem expedita qui officiis excepturi eveniet molestiae dignissimos quod cumque laudantium nisi magnam officia obcaecati incidunt vel! Labore, odio ratione. Aliquam necessitatibus adipisci minus, distinctio aspernatur illo nam pariatur sint laborum itaque velit possimus, repudiandae labore quis neque incidunt earum sapiente a omnis perferendis reprehenderit doloribus. Esse distinctio quis est tempore earum incidunt, reprehenderit temporibus beatae saepe amet suscipit, alias itaque tempora, sequi necessitatibus eos eveniet accusantium. Mollitia delectus asperiores facere iusto animi culpa, modi placeat aspernatur illum explicabo, eveniet dolorem nulla ex quibusdam! Error saepe rem molestiae dolorum libero animi mollitia officia velit ea enim quasi explicabo, adipisci minus eos perspiciatis est reiciendis totam esse at rerum neque optio quam porro? Quas autem officiis dolore, quis ab quia aspernatur ipsam fugit distinctio. Dolor tempore, suscipit iure numquam maxime sed nobis vero non ex quas soluta itaque molestias ipsum nihil dignissimos qui. Nam vel sequi accusantium. Tempore ea, ullam praesentium sequi saepe eligendi reiciendis iure voluptate aperiam facilis fugit quis, velit incidunt officiis commodi vero. Reprehenderit repudiandae nam error facere non accusantium? Ab, dolorem assumenda eveniet dolores facere laboriosam earum fugit." })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const initialState$1 = {};
const moviesDataSlice = createSlice({
  name: "moviesData",
  initialState: initialState$1,
  reducers: {
    setMoviesData: (state, action) => {
      state.movies = action.payload;
    }
  }
});
const moviesDataReducer = moviesDataSlice.reducer;
const { setMoviesData } = moviesDataSlice.actions;
const Card = ({ movie }) => {
  const [genreNames, setGenreNames] = useState([]);
  const navigate = useNavigate();
  const handleClick = (movieId, genreNames2, rating) => {
    const genreNamesParam = genreNames2.join(",");
    navigate(
      `/moviedetail/${movieId}?category=${genreNamesParam}&rating=${rating}`
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
      }
    }
    return genreArray;
  };
  useEffect(() => {
    setGenreNames(getGenreNames());
  }, [movie.genre_ids]);
  const genreFinder = () => {
    return genreNames.map((genre) => /* @__PURE__ */ jsx("li", { children: genre }, genre));
  };
  return /* @__PURE__ */ jsxs("div", { className: "card", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: movie.poster_path ? "https://image.tmdb.org/t/p/original/" + movie.poster_path : "./img/poster.jpg",
        alt: `affiche ${movie.title}`
      }
    ),
    /* @__PURE__ */ jsx("h2", { children: movie.title }),
    movie.release_date ? /* @__PURE__ */ jsxs("h5", { children: [
      "Release Date : ",
      movie.release_date
    ] }) : null,
    /* @__PURE__ */ jsxs("h4", { children: [
      movie.vote_average.toFixed(1),
      "/10 ",
      /* @__PURE__ */ jsx("span", { children: "⭐" })
    ] }),
    /* @__PURE__ */ jsx("ul", { children: movie.genre_ids ? genreFinder() : movie.genres.map((genre) => /* @__PURE__ */ jsx("li", { children: genre.name }, genre)) }),
    movie.overview ? /* @__PURE__ */ jsx("h3", { children: "Synopsis" }) : "",
    /* @__PURE__ */ jsx("p", { children: movie.overview }),
    movie.genre_ids ? /* @__PURE__ */ jsx(
      "div",
      {
        className: "btn",
        onClick: () => handleClick(movie.id, genreNames, movie.vote_average),
        children: "View details"
      }
    ) : /* @__PURE__ */ jsx("div", { className: "btn", children: "Supprimer de la liste" })
  ] });
};
const Form = () => {
  const initialSortGoodBad = typeof window !== "undefined" ? localStorage.getItem("sortGoodBad") : null;
  const initialSortByDate = typeof window !== "undefined" ? localStorage.getItem("sortByDate") : null;
  const initialCategory = typeof window !== "undefined" ? localStorage.getItem("category") : "";
  const initialRating = typeof window !== "undefined" ? localStorage.getItem("rating") : null;
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
    await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=17b1c4d68a51336bbc7cd07992ada264&query=${search}&language=us-EN`
    ).then((res) => dispatch(setMoviesData(res.data)));
  };
  useEffect(() => {
    const query = searchParams.get("query") || "code";
    const category2 = searchParams.get("category") || "";
    const rating2 = searchParams.get("rating") || "";
    if (query) {
      setSearch(query);
      setSubmittedSearch(query);
    } else {
      setSearch("");
      setSubmittedSearch("");
    }
    SetCategory(category2);
    setRating(rating2);
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
  return /* @__PURE__ */ jsxs("div", { className: "form-component", children: [
    /* @__PURE__ */ jsxs("div", { className: "form-container", children: [
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: () => {
            console.log("click");
          },
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Search a movie",
                id: "search-input",
                autoComplete: "off",
                value: search,
                onChange: (e) => setSearch(e.target.value)
              }
            ),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, children: "Search" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                name: "catégorie",
                id: "selectByCategory",
                onChange: (e) => {
                  SetCategory(e.target.value);
                },
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select category" }),
                  /* @__PURE__ */ jsx("option", { value: "Drama", children: "Drame" }),
                  /* @__PURE__ */ jsx("option", { value: "Action", children: "Action" }),
                  /* @__PURE__ */ jsx("option", { value: "Animation", children: "Animation" }),
                  /* @__PURE__ */ jsx("option", { value: "Comedy", children: "Comedy" }),
                  /* @__PURE__ */ jsx("option", { value: "Crime", children: "Crime" }),
                  /* @__PURE__ */ jsx("option", { value: "Documentary", children: "Documentary" }),
                  /* @__PURE__ */ jsx("option", { value: "Mystery", children: "Mystery" }),
                  /* @__PURE__ */ jsx("option", { value: "Thriller", children: "Thriller" }),
                  /* @__PURE__ */ jsx("option", { value: "Romance", children: "Romance" }),
                  /* @__PURE__ */ jsx("option", { value: "Science fiction", children: "Science fiction" }),
                  /* @__PURE__ */ jsx("option", { value: "War", children: "War" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "btn-sort-container", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "btn-sort",
            id: "goodToBad",
            onClick: () => setSortGoodBad("goodToBad"),
            children: [
              "Rating",
              /* @__PURE__ */ jsx("span", { children: "➜" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "btn-sort",
            id: "badToGood",
            onClick: () => setSortGoodBad("badToGood"),
            children: [
              "Rating",
              /* @__PURE__ */ jsx("span", { children: "➜" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "btn-date-container", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "btn-date",
            id: "oldest",
            onClick: () => setSortByDate("oldestToNewest"),
            children: "Oldest"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "btn-date",
            id: "newest",
            onClick: () => setSortByDate("newestToOldest"),
            children: "Newest"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "result", children: moviesData == null ? void 0 : moviesData.results.filter((movie) => {
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
    }).sort((a, b) => {
      if (sortGoodBad === "goodToBad") {
        return b.vote_average - a.vote_average;
      } else if (sortGoodBad === "badToGood") {
        return a.vote_average - b.vote_average;
      }
      return b.vote_average - a.vote_average;
    }).slice(0, 8).sort((a, b) => {
      if (sortByDate) {
        if (sortByDate === "oldestToNewest") {
          return new Date(a.release_date) - new Date(b.release_date);
        } else if (sortByDate === "newestToOldest") {
          return new Date(b.release_date) - new Date(a.release_date);
        }
      }
      return 0;
    }).map((movie) => /* @__PURE__ */ jsx(Card, { movie }, movie.id)) })
  ] });
};
const Header = () => {
  return /* @__PURE__ */ jsx("div", { className: "header", children: /* @__PURE__ */ jsx("h1", { children: "React Movies" }) });
};
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "home-page", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Form, {})
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
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
  return /* @__PURE__ */ jsxs("div", { className: "movie-details-container", children: [
    /* @__PURE__ */ jsx("h1", { className: "title_detail_page", children: "Details" }),
    selectedMovie ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "head", children: [
        /* @__PURE__ */ jsxs("div", { className: "head-title", children: [
          /* @__PURE__ */ jsx("h1", { className: "movie-title ", children: selectedMovie.title }),
          /* @__PURE__ */ jsx("p", { className: "synopsis ", children: selectedMovie.overview })
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "affiche ",
            src: `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`,
            alt: selectedMovie.title
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "trailer", children: /* @__PURE__ */ jsx(ReactPlayer, { url: "https://www.youtube.com/watch?v=ysz5S6PUM-U" }) })
    ] }) : /* @__PURE__ */ jsx("p", { children: "Not found" })
  ] });
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MovieDetail
}, Symbol.toStringTag, { value: "Module" }));
const initialState = {};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});
appSlice.actions;
const appReducer = appSlice.reducer;
const store = configureStore({
  reducer: {
    app: appReducer,
    moviesData: moviesDataReducer
  }
});
const pages = /* @__PURE__ */ Object.assign({ "./pages/About.jsx": __vite_glob_0_0, "./pages/AboutUs.jsx": __vite_glob_0_1, "./pages/AboutUs2.jsx": __vite_glob_0_2, "./pages/AboutUs3.jsx": __vite_glob_0_3, "./pages/Home.jsx": __vite_glob_0_4, "./pages/MovieDetail.jsx": __vite_glob_0_5 });
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  let newPath = name === "Home" ? "/" : `/${name.toLowerCase()}`;
  if (name === "MovieDetail") {
    newPath += "/:movieId";
  }
  return {
    name,
    path: newPath,
    component: pages[path].default
  };
});
function App({ store: store$1 = store }) {
  return /* @__PURE__ */ jsxs(Provider, { store: store$1, children: [
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { className: "nav_bar", children: routes.map(({ name, path }) => {
      if (name === "MovieDetail")
        return null;
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: path, children: name }) }, path);
    }) }) }),
    /* @__PURE__ */ jsx(Routes, { children: routes.map(({ path, component: RouteComp }) => {
      return /* @__PURE__ */ jsx(Route, { path, element: /* @__PURE__ */ jsx(RouteComp, {}) }, path);
    }) })
  ] });
}
const index = "";
function render(url, context) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, context, children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  render
};
