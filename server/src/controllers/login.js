const users = require('../utils/users')

function login (req , res){
    const {email , password}= req.query

    const miembro = users.find(user => user.email === email && user.password === password)

    if(miembro){
       return res.status(200).json({access:true})
    }else{
       return res.status(200).json({access:false})
    }

}

module.exports = login