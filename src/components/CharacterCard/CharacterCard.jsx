const CharacterCard = ({ character }) => {
  const { id, name, image, alternate_names, house, actor, gender } = character;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={id}>
      <div className="card bg-dark text-white h-100 d-flex flex-column">
        <img
          src={image || "https://via.placeholder.com/250"}
          alt={name}
          className="card-img-top"
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text">
            <strong>Apodo:</strong> {alternate_names || "N/A"}
          </p>
          <p className="card-text">
            <strong>Casa de Hogwarts:</strong> {house || "Desconocida"}
          </p>
          <p className="card-text">
            <strong>Interpretado por:</strong> {actor || "N/A"}
          </p>
          <p className="card-text">
            <strong>Género:</strong> {gender || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export { CharacterCard };
