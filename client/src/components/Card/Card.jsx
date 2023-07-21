import React, { useState } from "react";
import Stilos from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import { useEffect } from "react";
import { connect } from "react-redux";

export function Card(props) {
  const [isfav, setIsfav] = useState(false);

  function handleFavorite() {
    if (isfav) {
      setIsfav(false);
      props.removeFav(props.id);
    } else {
      setIsfav(true);
      props.addFav({
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
        status: props.status,
        origin: props.origin,
        id: props.id,
      });
    }
  }

  useEffect(() => {
    props.favorites &&
      props.favorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsfav(true);
        }
      });
  }, [props.favorites]);

  return (
    <div className={Stilos.ir}>
      <h3>id: {props.id}</h3>
      <div className={Stilos.divM}>
        <div className={Stilos.Targeta}>
          <div className={Stilos.contenedorA}>
            <div className={Stilos.adelante}>
              <img src="https://color-hex.org/colors/c2967b.png" alt="" />
              <h2>Name: {props.name}</h2>
            </div>
          </div>
          <div className={Stilos.contenedorB}>
            <div className={Stilos.atras}>
              <div className={Stilos.archivoA}>
                <img
                  className={Stilos.imagen}
                  src={props.image}
                  alt={`este personaje es ${props.name}`}
                />
              </div>
              <div className={Stilos.archivoB}>
                <div className={Stilos.bontones}>
                <button onClick={props.onClose}>X</button>
                {isfav ? (
                  <button onClick={handleFavorite}>❤️</button>
                ) : (
                  <button onClick={handleFavorite}>🤍</button>
                )}
                </div>
                <h2>Name: {props.name}</h2>
                <h2>Status: {props.status}</h2>
                <h2>Specie: {props.species}</h2>
                <h2>Gender: {props.gender} </h2>
                <h2>Origin: {props.origin}</h2>
                <Link to={`/detail/${props.id}`}>
                  <h2> CLASIFICADO </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (personaje) {
      dispatch(addFav(personaje));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export function mapStateToProps(state) {
  return {
    favorites: state.allCharacters,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);