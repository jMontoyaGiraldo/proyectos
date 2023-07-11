import React from "react";
import { Link } from "react-router-dom";

export default function Error (){
    return(
        <div>
            <Link to="/">atras</Link>
            <p> Lo siento esta infomracion no la pude encontrar</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAdzL2w7wnSK7CxM-FOzQ164deFyIn31Qpg&usqp=CAU" alt="" />
        </div>
    )
}