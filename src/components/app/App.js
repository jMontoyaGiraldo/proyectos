import "./App.css";
import Cards from "../cards/Cards";
import Nave from "../Nav/Nav";
// import characters from '../../data.js';
import { useState } from "react";
import axios from "axios";
import {Route} from 'react-router-dom'

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    const charactersEX = characters.find(
      (character) => character.id === Number(id)
    );

    if (charactersEX) return window.alert("ya agregaste este personaje");

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((character) => [data, ...character]);
        } else if (!data) {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  return (
    <div className="App">
      <Nave onSearch={onSearch} />
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
}

export default App;
