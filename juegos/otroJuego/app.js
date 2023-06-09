const cartas = [
    {
        name: 'goku',
        img: 'https://www.superherotoystore.com/cdn/shop/articles/e33c2fa94c03efa06678116f80d62d0d_600x.jpg?v=1590599656',
    },
    {
        name:'kratos',
        img: 'https://i.pinimg.com/564x/e0/07/9d/e0079d42bb3cb2135b1e0b82fa7a54e4.jpg',
    },
    {
        name:'vegeta',
        img:'https://i.pinimg.com/564x/7f/af/b9/7fafb9d4b589a67f9115f9a258a2b4a4.jpg'
    },
    {
        name: 'ichigo',
        img:'https://i.pinimg.com/564x/bc/97/96/bc979606e098385a1ed2155d0ad4cda1.jpg'
    },
    {
        name:'viego',
        img:'./imagenes/viego.jpg'
    },
    {
        name:'shaggy',
        img:'https://i.pinimg.com/564x/7b/91/3e/7b913ee84d8239407ef7cbc398456b0a.jpg'
    },
    {
        name:'el simbolo del pecado',
        img:'https://i.pinimg.com/564x/5d/19/be/5d19be413558fae18cad314bd0363df3.jpg'
    },
    {
        name:'kitby',
        img:'https://i.pinimg.com/564x/8a/96/13/8a9613974c5d6a21b2212ee0af8038ac.jpg'
    },
    {
        name:'toad',
        img:'https://i.pinimg.com/564x/ab/18/6c/ab186c52a0e4ddfe3b72c40eb55d8fd9.jpg'
    },
    {
        name: 'goku',
        img: 'https://www.superherotoystore.com/cdn/shop/articles/e33c2fa94c03efa06678116f80d62d0d_600x.jpg?v=1590599656',
    },
    {
        name:'kratos',
        img: 'https://i.pinimg.com/564x/e0/07/9d/e0079d42bb3cb2135b1e0b82fa7a54e4.jpg',
    },
    {
        name:'vegeta',
        img:'https://i.pinimg.com/564x/7f/af/b9/7fafb9d4b589a67f9115f9a258a2b4a4.jpg'
    },
    {
        name: 'ichigo',
        img:'https://i.pinimg.com/564x/bc/97/96/bc979606e098385a1ed2155d0ad4cda1.jpg'
    },
    {
        name:'viego',
        img:'./imagenes/viego.jpg'
    },
    {
        name:'shaggy',
        img:'https://i.pinimg.com/564x/7b/91/3e/7b913ee84d8239407ef7cbc398456b0a.jpg'
    },
    {
        name:'el simbolo del pecado',
        img:'https://i.pinimg.com/564x/5d/19/be/5d19be413558fae18cad314bd0363df3.jpg'
    },
    {
        name:'kitby',
        img:'https://i.pinimg.com/564x/8a/96/13/8a9613974c5d6a21b2212ee0af8038ac.jpg'
    },
    {
        name:'toad',
        img:'https://i.pinimg.com/564x/ab/18/6c/ab186c52a0e4ddfe3b72c40eb55d8fd9.jpg'
    }
]

reversoDeCartas = 'https://i.pinimg.com/564x/54/f0/0d/54f00da52d7a8e934c94aa155ad34148.jpg'

cartas.sort(()=> 0.5 - Math.random())
var eleccionDeCarta = []
var idDeCartasElegidas=[]
const cartasEncontradas =[]

const grid = document.querySelector('#grid')

const creadorDeTablero = () => {
    for (let i = 0; i < cartas.length; i++) {
        const carta = document.createElement('img')
        const divisor=document.createElement('div')
        divisor.setAttribute('id',`id${i}`)
        divisor.setAttribute('class',`ll`)
        carta.setAttribute('src','https://i.pinimg.com/564x/54/f0/0d/54f00da52d7a8e934c94aa155ad34148.jpg')
        carta.setAttribute('data-id', i)
        grid.appendChild(divisor)
        divisor.appendChild(carta) 
        carta.addEventListener('click',voltearCarta)
              
    }
}
creadorDeTablero() ;

function checkMatch(){
    const targetas= document.querySelectorAll('img')

    const targeta1 = idDeCartasElegidas[0]
    const targeta2 = idDeCartasElegidas[1]

    if(targeta1 == targeta2){
        alert('no eligas la misma carta')
    }
    if (eleccionDeCarta[0]=== eleccionDeCarta[1] && targeta1 !== targeta2 ){
        alert('las encontraste')
        targetas[idDeCartasElegidas[0]].setAttribute('src', 'https://thumbs.dreamstime.com/b/tumba-dibujo-de-vectores-158516275.jpg')
        targetas[idDeCartasElegidas[1]].setAttribute('src', 'https://thumbs.dreamstime.com/b/tumba-dibujo-de-vectores-158516275.jpg')
        targetas[idDeCartasElegidas[0]].removeEventListener('click',voltearCarta)
        targetas[idDeCartasElegidas[1]].removeEventListener('click',voltearCarta)
        cartasEncontradas.push(cartas[targeta1], cartas[targeta2])
        let puntaje = 0
        const puntajePantalla = document.querySelector('#resultado')
        puntaje = cartasEncontradas.length*50;
        puntajePantalla.innerHTML = puntaje

        if (cartasEncontradas.length== cartas.length){
            alert('eljuego acabo')
        }
    } else { 
        targetas[idDeCartasElegidas[0]].setAttribute('src', 'https://i.pinimg.com/564x/54/f0/0d/54f00da52d7a8e934c94aa155ad34148.jpg')
        targetas[idDeCartasElegidas[1]].setAttribute('src', 'https://i.pinimg.com/564x/54/f0/0d/54f00da52d7a8e934c94aa155ad34148.jpg')
    }

     eleccionDeCarta = []
     idDeCartasElegidas=[]
}

function voltearCarta  (){
    let idCarta = this.getAttribute('data-id');

    eleccionDeCarta.push(cartas[idCarta].name);

    idDeCartasElegidas.push(idCarta)

    console.log(eleccionDeCarta)

    console.log(idDeCartasElegidas)

    this.setAttribute('src',cartas[idCarta].img)
    if(eleccionDeCarta.length==2){
        setTimeout(checkMatch,500)
    }
}
