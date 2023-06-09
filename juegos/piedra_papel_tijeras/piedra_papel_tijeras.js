const entradaCompu = document.getElementById('entradaDelComputador')
const seleccionUsuario = document.getElementById('entradaDelUsuario')
const Resultado = document.getElementById('resultado')
const opciones = document.querySelectorAll('button')

let eleccion
let eleccionDelComputador
let resultadoo

opciones.forEach(opciones => opciones.addEventListener('click', (e) => {
    eleccion = e.target.id 
    seleccionUsuario.innerHTML = eleccion
    generadorDeElcionDelComputador()
    resultado()
}))

function generadorDeElcionDelComputador (){
    const numeroAleatorio = Math.floor (Math.random() * opciones.length)+1; //opciones.length
    // eleccionDelComputador=opciones[numeroAleatorio]

    if(numeroAleatorio === 1){
        eleccionDelComputador = 'Piedra'
    }
    if(numeroAleatorio === 2){
        eleccionDelComputador = 'Papel'
    }
    if(numeroAleatorio === 3){
        eleccionDelComputador = 'Tijera'
    }
   ;
entradaCompu.innerHTML = eleccionDelComputador
} 


function resultado (){
    if(eleccionDelComputador === eleccion){
        resultadoo = 'Empate'
    }

    if(eleccionDelComputador == 'Tijera' && eleccion == 'Papel'){
        resultadoo = 'Perdiste'
    }
    if(eleccionDelComputador == 'Tijera' && eleccion == 'Piedra'){
        resultadoo = 'Ganaste'
    }
    if(eleccionDelComputador == 'Piedra' && eleccion == 'Tijera'){
        resultadoo = 'Perdiste'
    }
    if(eleccionDelComputador == 'Piedra' && eleccion == 'Papel'){
        resultadoo = 'Ganaste'
    }
    if(eleccionDelComputador == 'Papel' && eleccion == 'Piedra'){
        resultadoo = 'Perdiste'
    }
    if(eleccionDelComputador == 'Papel' && eleccion == 'Tijera'){
        resultadoo = 'Ganasate'
    }
     Resultado.innerHTML = resultadoo
}