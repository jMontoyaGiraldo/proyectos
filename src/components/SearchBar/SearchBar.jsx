import estilos from "./SearchBar.module.css"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(props) {

   const [id , setId]= useState('')

   const [input , setInput]= useState('')

   const handleChange = (event)=>{
      let {value} = event.target;
      setId(value);
   }
   const sender = event =>{
      event.preventDefault();
      setInput('');
   }
   return (
      <div className= {estilos.contenedor}>
         <form action="post" className={estilos.form} method="post" onSubmit={sender} onChange={event => event.target.tagName.toLowerCase() === 'input' && setInput(event.target.value)}>
         <input type='search'  value={input} onChange={handleChange}/>
         <button onClick={()=>  props.onSearch(id)}>
          <FontAwesomeIcon icon={faGlasses} /> 
         </button>
         <button onClick={props.random}>
        Random
      </button>
         </form>
      </div>
   );
}
