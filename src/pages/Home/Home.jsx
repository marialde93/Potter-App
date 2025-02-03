import { Layout } from "../../components/Layout/layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="home-container text-center py-5 bg-dark text-white">
        <h1 className="mb-4">¡Bienvenido a la Harry Potter APP!</h1>
        <p className="mb-5">
          Adéntrate en el mágico mundo de Harry Potter. Descubre detalles sobre
          tus personajes favoritos, información única del universo mágico y
          comienza tu aventura en este fantástico viaje.
        </p>

        <div className="container">
          <div className="row text-center">
            
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title text-dark">Personajes</h5>
                  <p className="card-text text-dark">
                    Explora la vida y los secretos de los personajes más
                    icónicos del mundo mágico.
                  </p>
                  <Link to="/personajes" className="btn btn-dark">
                    Ver Personajes
                  </Link>
                </div>
              </div>
            </div>

            
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title text-dark">Información</h5>
                  <p className="card-text text-dark">
                    Aprende más sobre los libros, películas y curiosidades del
                    universo de Harry Potter.
                  </p>
                  <Link to="/info" className="btn btn-dark">
                    Más Información
                  </Link>
                </div>
              </div>
            </div>

            
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title text-dark">Comenzar Aventura</h5>
                  <p className="card-text text-dark">
                    ¿Estás listo para tu aventura? Haz clic y comienza el viaje
                    por el mundo mágico.
                  </p>
                  <Link to="/" className="btn btn-dark">
                    Comenzar Aventura
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

export { Home };
