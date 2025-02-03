import { Layout } from "../../components/Layout/layout";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <Layout>
      <div className="info-container text-center py-5 bg-dark text-white">
        <h1 className="mb-4">Información sobre el mundo de Harry Potter</h1>
        <p className="mb-5">
          Sumérgete en los detalles mágicos de Harry Potter. Aprende sobre los
          libros, revive las películas y descubre curiosidades que harán que te
          sientas parte del universo mágico.
        </p>

        <div className="container">
          {/* Tarjeta Libros */}
          <div className="card mb-4 shadow-lg">
            <div className="row g-0">
              <div className="col-md-4 d-flex align-items-center justify-content-center bg-light">
                <img
                  src="https://plazacapital.co/webs/produccion5/jkrowling/Img_fondos/img_fondo_1.jpg"
                  alt="Libros"
                  className="img-fluid rounded-start"
                  style={{
                    width: "400px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-md-8 d-flex align-items-center justify-content-center">
                <div className="card-body text-center">
                  <h5 className="card-title text-dark">Libros</h5>
                  <p className="card-text text-dark">
                    Explora la colección completa de libros de Harry Potter y
                    descubre la magia página a página.
                  </p>
                  <Link to="/libros" className="btn btn-dark">
                    Ver Libros
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta Películas */}
          <div className="card mb-4 shadow-lg">
            <div className="row g-0">
              <div className="col-md-4 d-flex align-items-center justify-content-center bg-light">
                <img
                  src="https://static.posters.cz/image/hp/80594.jpg"
                  alt="Películas"
                  className="img-fluid rounded-start"
                  style={{
                    width: "400px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-md-8 d-flex align-items-center justify-content-center">
                <div className="card-body text-center">
                  <h5 className="card-title text-dark">Películas</h5>
                  <p className="card-text text-dark">
                    Revive las aventuras mágicas en la pantalla grande con
                    detalles sobre todas las películas de la saga.
                  </p>
                  <Link to="/peliculas" className="btn btn-dark">
                    Ver Películas
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta Curiosidades */}
          <div className="card mb-4 shadow-lg">
            <div className="row g-0">
              <div className="col-md-4 d-flex align-items-center justify-content-center bg-light">
                <img
                  src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/09/harry-potter-orden-fenix-2467329.jpg?tf=1200x"
                  alt="Curiosidades"
                  className="img-fluid rounded-start"
                  style={{
                    width: "400px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-md-8 d-flex align-items-center justify-content-center">
                <div className="card-body text-center">
                  <h5 className="card-title text-dark">Curiosidades</h5>
                  <p className="card-text text-dark">
                    ¿Sabías que los dementores están inspirados en emociones
                    reales? Descubre más curiosidades aquí.
                  </p>
                  <Link to="/curiosidades" className="btn btn-dark">
                    Ver Curiosidades
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { Info };
