let myFavorites = [];


function postFav(req , res){
    myFavorites.push(req.body)
   return res.status(201).json(myFavorites)
}

function deleteFav(req , res){
    myFavorites= myFavorites.filter(eleme => eleme.id != req.params.id )
    return res.status(200).json(myFavorites)
}

module.exports = {
    postFav ,
    deleteFav
}