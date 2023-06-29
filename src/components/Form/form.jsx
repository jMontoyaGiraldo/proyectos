import React from "react";
import { useState } from "react";
import validate from "./validation";
import Style from "./forms.module.css";
import imagen from '../rick-and-morty/miniMorty.png'
// import { Navigate } from "react-router-dom";

export default function Form(props) {
    const [userData, setUserData] = useState({
      email: "",
      password: "",
    });
  
    const [errors, setErrors] = useState({
      email: "",
      password: "",
    });
  
    const handleChange = (event) => {
      const property = event.target.name;
      const value = event.target.value;
  
      setUserData({ ...userData, [property]: value });
      setErrors(validate({...userData,[property]: value}, errors));
    };

    function handleSubmit(event){
        event.preventDefault();
        props.login(userData);
      }
  
    return (
        <div className={Style.div}>
      <div className={Style.divM}>
        <img src={imagen} alt="detective morty" />
        <h3 className={Style.hh}> Cuidado al adéntrate en mi sombría investigación del multiverso, donde los no-Ricks sufren y el principio de Copérnico prevalece, recordándonos nuestra insignificancia en un cosmos despiadado</h3>
        <form action="" onSubmit={handleSubmit}>
            <div className={Style.email}>
          <label htmlFor=""> Email: </label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={errors.email ? Style.error : Style.bien}
          />
          <span> {errors.email}</span></div>

          <div className={Style.email}>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={errors.password ? Style.error : Style.bien}
          /><span> {errors.password}</span>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div></div>
    );
  }