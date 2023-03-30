import { Provider } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import appStore from "@store";
import MovieDetail from "./pages/MovieDetail"; // Ajoutez cette ligne

const pages = import.meta.glob("./pages/*.jsx", { eager: true });

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  let newPath = name === "Home" ? "/" : `/${name.toLowerCase()}`;
  if (name === "MovieDetail") {
    newPath += "/:movieId"; // Modifiez cette ligne
  }
  return {
    name,
    path: newPath,
    component: pages[path].default,
  };
});

export function App({ store = appStore }) {
  return (
    <Provider store={store}>
      <nav>
        <ul className="nav_bar">
          {routes.map(({ name, path }) => {
            if (name === "MovieDetail") return null;
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, component: RouteComp }) => {
          return <Route key={path} path={path} element={<RouteComp />}></Route>;
        })}
      </Routes>
    </Provider>
  );
}
