import { Link } from "react-router-dom";

const IndexMovieTheaters = () => {
  return (
    <>
      <h3>Movie Theaters</h3>
      <Link className="btn btn-primary " to="/movietheater/create">
        Create Movie Theater
      </Link>
    </>
  );
};

export default IndexMovieTheaters;
