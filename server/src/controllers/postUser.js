const {User} = require('../DB_connection')

const postUser = async(req , res)=> {
    try {
      const {email , password} = req.body;
      if(!password) return res.status(400).json({ error: 'Falta password' });
      if(!email) return res.status(400).json({ error: 'Falta email' });
      
      const[createdUser , created] = await User.findOrCreate({
        where:{email},default:{password,}});

      if(created){
        if (created) {
          return res.status(201).json(createdUser);
        } else {
          return res.status(200).json(createdUser);
        }
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
}
    
module.exports= postUser