import { Link } from "react-router-dom";
import "../style.css"

export default function Navbar(){
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link data-testid="brand" className="navbar-brand" href="/">
            Boo!movies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="movies.html"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Top Rated
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Series
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Genre
                </Link>
              </li>
            </ul>
            <form data-testid="search" className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  };