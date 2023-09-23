import IndexGenres from "../Genres/IndexGenres";
import LandingPage from "../movies/LandingPage";

export const routes = [
  { path: "/genres", component: IndexGenres, exact: true },
  { path: "/", component: LandingPage, exact: true },
];
