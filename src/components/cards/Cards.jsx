import React from 'react';
import Card from '../card/Card';
import estilos from './Cards.module.css';


export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={estilos.contenedor}>
      {characters.map((c) => (
        <Card
          name={c.name}
          status={c.status}
          species={c.species}
          gender={c.gender}
          origin={c.origin}
          image={c.image}
          key={c.id}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
}


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