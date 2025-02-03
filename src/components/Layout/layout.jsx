import { Link } from "react-router-dom";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Harry Potter APP
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/personajes">
                    Personajes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/info">
                    Info
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>
      <footer className="bg-dark text-white pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="navbar-brand text-white">Harry Potter APP</h5>
              <p>Tu portal para explorar el mágico mundo de Harry Potter.</p>
            </div>

            <div className="col-md-4">
              <h5>Navegación</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-white" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to="/personajes">
                    Personajes
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to="/info">
                    Info
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>Síguenos</h5>
              <ul className="list-unstyled d-flex">
                <li className="me-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    className="text-white text-decoration-none"
                  >
                    <i className="bi bi-facebook"></i> Facebook
                  </a>
                </li>
                <li className="me-3">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="text-white text-decoration-none"
                  >
                    <i className="bi bi-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="text-white text-decoration-none"
                  >
                    <i className="bi bi-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col text-center">
              <p className="mb-0">
                &copy; 2025 Harry Potter APP. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Layout };
