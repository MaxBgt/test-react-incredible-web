import MovieFilter from "../components/Organism/MovieFilter";
import Header from "../components/Organism/Header";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <MovieFilter />
    </div>
  );
}
