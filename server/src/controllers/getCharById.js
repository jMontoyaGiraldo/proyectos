const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"
// const express = require('../index')
// const Route = express.Router()


function getCharById(req, res) {
  axios(`${URL}${req.params.id}`)
    .then((response) => {
      const data = response.data;
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status,
      };

      return character.name ? res.status(200).json(character) :
      res.status(404).send('Not fount')
      
    })
    .catch((error) => {
      res.status(500).json({error:error.message})
    });
}

module.exports = getCharById;