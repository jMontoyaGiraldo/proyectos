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
      props.onSearch(input);
      setInput('');
   }
   return (
      <div className= {estilos.contenedor}>
         <form action="post" method="post" onSubmit={sender} onChange={event => setInput(event.target.value)}>
         <input type='search'  value={input} />
         <button onClick={()=>  props.onSearch(id)}>
         <FontAwesomeIcon icon={faGlasses} />
         </button>
         </form>
      </div>
   );
}
