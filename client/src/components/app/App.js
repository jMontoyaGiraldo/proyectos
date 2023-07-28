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
import axios from 'axios'

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

 
  const navigate = useNavigate();

  async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    try {
      const {data} =await axios(URL + `?email=${email}&password=${password}`)
      const {access} = data

      setAccess(access)
      access && navigate('/home')

    } catch ({ response }) {
      const { data } = response
      console.log(data);
      alert(data.message)
    }
 }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);


  const onSearch = async(id) => {
    try {

       const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

       if (data.name) {
        characters.find((element) => element.id === data.id) === undefined
          ? setCharacters([data, ...characters])
          : alert("Personaje repetido, prueba otro ID.");}
    } catch (error) {
      alert(error.response.data)
      
    }
   
      
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
