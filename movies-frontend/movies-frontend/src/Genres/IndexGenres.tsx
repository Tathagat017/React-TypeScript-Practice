import { Link } from "react-router-dom";

const IndexGenres = () => {
  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary " to="/genre/create">
        Create Genre
      </Link>
    </>
  );
};

export default IndexGenres;
