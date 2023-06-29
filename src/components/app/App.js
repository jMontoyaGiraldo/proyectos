import "./App.css";
import Cards from "../cards/Cards";
import Nave from "../Nav/Nav";
import Detail from "../detail/detail";
import Error from "../error/error";
import About from "../about/about";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import React from "react";
import Form from "../Form/form";
import Favorites from "../Fav/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const EMAIL = "juanma11elpapi@gmail.com";
  const PASSWORD = "TinyTigre";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters([data, ...characters])
            : alert("Personaje repetido, prueba otro ID.");
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  }

  function random() {
    let randomId = Math.ceil(Math.random() * 826);
    onSearch(randomId);
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  const location = useLocation();

  return (
   
      <div className="App">
        {location.pathname !== "/" && (
          <Nave onSearch={onSearch} random={random} />
        )}
        <Routes>
          <Route exact path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
  );
}

export default App;
