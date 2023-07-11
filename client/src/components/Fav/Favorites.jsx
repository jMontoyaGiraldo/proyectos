import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import { connect } from "react-redux";
import { removeFav } from "../../redux/action";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/action";
import estilos from './favorites.module.css'

export function Favorites({ favorites, removeFav }) {

  const [aux , setAux] = useState(false)

  const dispatch = useDispatch()

  const handleRemove = (id) => {
    removeFav(id);
  };

  function handleOrder (e){
    dispatch(orderCards(e.target.value))
    setAux(true)
  }

  function handleFilter(e){
    dispatch(filterCards(e.target.value))
  }

  return (
    <div className={estilos.contenedor}>
      <select name="ORDEN" id="" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Desendente</option>
      </select>
      <select name="Gender" id="" onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>

      {favorites.length === 0 ? (
        <p style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}>
          ¡Agrega un favorito!
        </p>
      ) : (
        favorites.map((c) => (
          <Card
            name={c.name}
            status={c.status}
            species={c.species}
            gender={c.gender}
            origin={c.origin}
            image={c.image}
            id={c.id}
            key={c.id}
            onRemove={() => handleRemove(c.id)} // Agregar el manejador de eliminación
          />
        ))
      )}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
