import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import estilos from './Cards.module.css';
import { removeFav } from '../../redux/action';

function Cards(props) {

  const [listadeC , detListadeC] = useState()
  const [show, setShow] = useState();

  const ChangeP = (card) => {
    setShow(card);
  };

  const handleRemove = (id) => {
    props.removeFav(id);
  };

  const { characters, onClose } = props;

  return (
    <div className={estilos.DivM}>
      <div className={estilos.espacio}>
        {show && <span>{show}</span>}
      </div>
      <div className={estilos.contenedor}>
        {characters.map((c) => (
          <span key={c.id}>
            <button
              onClick={() =>
                ChangeP(
                  <Card
                    name={c.name}
                    status={c.status}
                    species={c.species}
                    gender={c.gender}
                    origin={c.origin}
                    image={c.image}
                    id={c.id}
                    onClose={() => onClose(c.id)}
                    onRemove={() => handleRemove(c.id)}
                  />
                )
              }
            >
              kok
            </button>
            <Card
              name={c.name}
              status={c.status}
              species={c.species}
              gender={c.gender}
              origin={c.origin}
              image={c.image}
              id={c.id}
              onClose={() => onClose(c.id)}
              onRemove={() => handleRemove(c.id)}
            />
            {}
          </span>
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  removeFav: removeFav,
};

export default connect(null, mapDispatchToProps)(Cards);

 // export default function Cards(props) {
//    const {characters} = props;
//    // const rederizadoDeCharacters = characters.map(elemento =>{
//    //    var key=elemento.di
//    //     return ( key ,
//    //       Card(elemento)  )
 
//    //    }
//    //    )
//    return( <div>
//       {characters.map((c)=>(
//          <Card 
//           name ={c.name}
//           status={c.status}
//           species={c.species}
//           gender={c.gender}
//           origin={c.origin}
//           image={c.image}
//           key={c.di}
//           onClose={()=>alert('eliminar')}/>
//          ))}
//      {/* {rederizadoDeCharacters} */}
   
//    </div>);
// }