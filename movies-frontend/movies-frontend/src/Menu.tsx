import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid"></div>
      <NavLink className="navbar-brand" to="/">
        React Movies
      </NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-1 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/genres">
              Genres
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
