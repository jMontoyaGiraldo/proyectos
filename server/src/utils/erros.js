module.exports=(res, erro)=>{
    const {respones} = erro

    if(respones){
        const {status , data} = respones;
        const statusCode = status || 404 ;
        const errorMassage = data.erro || 'no existe el personaje';
        res.status(statusCode).send(errorMassage)
    }else{
        res.status(500).send('Internal Server Error')
    }
}