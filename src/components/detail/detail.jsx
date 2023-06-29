import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import estilos from "./detail.module.css";

export default function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.error("Error during request: ", error);
        window.alert(
          "Hubo un error durante la solicitud. Por favor intente de nuevo."
        );
      });

    return setCharacter({});
  }, [id]);

  return (
    <div className={estilos.divM}>
      <div className={estilos.infoA1}>
        <div className={estilos.imagen}>
          <img src={character.image} />
        </div>
        <div className={estilos.infoA}>
          {/* atributo name */}
          <p>Name : {character.name ? <b>{character.name}</b> : <input/>}</p>
          {/* atributo status */}
          <p>Status : {character.status ? <b>{character.status}</b> : <input/>}</p>
          {/* atributo specie */}
          <p>Specie : {character.species ? <b>{character.species}</b> :<input/>}</p>
          {/* atributo gender */}
          <p>Gender : {character.gender ? <b>{character.gender}</b> : <input/>}</p>
          {/* atributo origin.name */}
          <p>Origin : {character.origin?.name ? <b>{character.origin.name}</b> :<input/>}</p>
        </div>
      </div>
      <div className={estilos.infoB}>
        {/* atributo type */}
      <p>Type : {character.type ? <b>{character.type}</b> :<input/>}</p>
      {/* atributo location.name */}
      <p>Location : {character.location?.name ? <b>{character.location.name}</b> : <input/>}</p>
      {/* atributo episodeo */}
      <p>sightings : {character.episode ? <b>{character.episode.length}</b> :<input/>}</p>
      </div>
      <button onClick={() => navigate("/home")}>Back to Home</button>
    </div>
  );
}
