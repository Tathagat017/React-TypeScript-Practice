import { useState, useEffect } from "react";

import { LandingPageDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";
import Menu from "./Menu";

function App() {
  const [movies, setMovies] = useState<LandingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "Spider Man far from Home",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
          },
          {
            id: 2,
            title: "Luca",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
          },
        ],
        upcompingReleases: [
          {
            id: 1,
            title: "Venom - Let there be carnage",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/a/a7/Venom_Let_There_Be_Carnage_poster.jpg",
          },
          {
            id: 2,
            title: "Puss in Boots: The Last Wish",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg",
          },
        ],
      });
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <Menu />
      <div className="container">
        <h3>In Theater</h3>
        <MoviesList movies={movies.inTheaters} />
        <h3>Upcoming Releases</h3>
        <MoviesList movies={movies.upcompingReleases} />
      </div>
    </>
  );
}

export default App;
