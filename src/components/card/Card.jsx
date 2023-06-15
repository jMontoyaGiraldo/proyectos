// import React from "react";
// import Stilos from "./Card.module.css"
// export default function Card(props) {
// //    {props.onClose= ()=>alert('eliminar')}
//    return (
//       <div>
//          <button onClick={props.onClose}>X</button>
//          <h2>{props.name}</h2>
//          <h2>{props.status}</h2>
//          <h2>{props.species}</h2>
//          <h2>{props.gender} </h2>
//          <h2>{props.origin.name}</h2>
//          <img src={props.image} alt= {`este personaje es ${props.name}`} />
//       </div>
//    );
//    }



// export default function Card(props) {
//   const imagenDeFondo = {
//     backgroundImage :`url(${props.image})`
//   }
//    return (
//     <div className={Stilos.divM}>
//      <div className={Stilos.CardDiv} style={imagenDeFondo} >


//      <section className={Stilos.seccionB}>
//       <button onClick={props.onClose}>X</button>
//       <button ></button>
//       </section>
      
//        <h2 className={Stilos.Titulo}>{props.name}</h2>
//        </div>

//        {/* <img src={props.image} alt={`${props.name}`} /> */}
    
//        <div className={Stilos.info}>
//         <section className={Stilos.informacion}>
//         {/* <h3> </h3> */}
//        <h4>Especie: {props.species}</h4>
//        {/* <h3></h3> */}
//        <h4>Estado: {props.status}</h4>
//         {/* <h3> </h3> */}
//         <h4>Genero: {props.gender}</h4>
//        {/* <h3></h3> */}
//        <h4>Origen: {props.origin.name}</h4>
//        </section>

//        <section className={Stilos.informacion}>

//        </section>
//      </div>


//      </div>
//    );
//  }

import React from "react";
import Stilos from "./Card.module.css"
export default function Card(props) {
   // {props.onClose= ()=>alert('eliminar')}
    return (
      <div className={Stilos.ir}>
      <h3>id: {props.key}</h3>
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
            <img className={Stilos.imagen} src={props.image} alt= {`este personaje es ${props.name}`} />
            </div>
            <div className={Stilos.archivoB}>
            <button onClick={props.onClose}>X</button>
            <h2>Name: {props.name}</h2>
            <h2>Status: {props.status}</h2>
            <h2>Specie: {props.species}</h2>
            <h2>Gender: {props.gender} </h2>
            <h2>Origin: {props.origin.name}</h2>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
