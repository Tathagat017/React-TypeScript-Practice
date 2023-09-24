import CreateGenre from "../Genres/CreateGenre";
import EditGenre from "../Genres/EditGenre";
import IndexGenres from "../Genres/IndexGenres";
import CreateMovieTheater from "../MovieTheaters/CreateMovieThreaters";
import EditMovieTheater from "../MovieTheaters/EditMovieThreaters";
import IndexMovieTheaters from "../MovieTheaters/IndexMovieTheaters";
import CreateActors from "../actors/CreateActor";
import EditActors from "../actors/EditActors";
import IndexActors from "../actors/IndexActors";
import LandingPage from "../movies/LandingPage";

export const routes = [
  { path: "/", component: LandingPage, exact: true },

  { path: "/genres", component: IndexGenres, exact: true },
  { path: "/genre/create", component: CreateGenre, exact: true },
  { path: "/genre/edit", component: EditGenre, exact: true },

  { path: "/actors", component: IndexActors, exact: true },
  { path: "/actors/create", component: CreateActors, exact: true },
  { path: "/actors/edit", component: EditActors, exact: true },

  { path: "/movietheaters", component: IndexMovieTheaters, exact: true },
  { path: "/movietheaters/create", component: CreateMovieTheater, exact: true },
  { path: "/movietheaters/edit", component: EditMovieTheater, exact: true },
];
