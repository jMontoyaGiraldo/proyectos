const {User}= require('../DB_connection');

async function login (req , res){
    const {password , email} = req.query
    try {
         if(!email || !password)return res.status(400).message('Falta datos');

        const userLoged= await User.findOne({where:{email}});

        if(!userLoged) return res.status(404).json({ error: 'Usuario no encontrado' });

        return userLoged.password === password
      ? res.status(200).json({ access: true })
      : res.status(401).json({ error: 'Contraseña incorrecta' });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
   
}


module.exports= login
