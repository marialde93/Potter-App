import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/layout";
import axios from "axios";
import { Loader } from "../../components/Loader/Loader";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { fetchingData } from "../../services/CharacterApi";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const charactersData = await fetchingData();
      setCharacters(charactersData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      {isLoading && <Loader />}

      {characters.length > 0 && (
        <div className="container">
          <h1>Personajes de Harry Potter</h1>
          <div className="row mt-4">
            {characters.slice(0, 20).map((character) => {
              const { id, image, name, alternate_names, house, actor, gender } =
                character;
              return <CharacterCard character={character}></CharacterCard>;
            })}
          </div>
        </div>
      )}
    </Layout>
  );
};

export { Characters };
