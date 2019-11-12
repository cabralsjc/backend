const User = require('../models/User');

module.exports = {
   
    async store(req, res){

        const {username} = req.body;
        if(username){
            const userExist = await User.findOne({user: username});

        if(userExist){
            return res.json(userExist);
        }

        const user = await User.create({
            user: username,
        });
         
        return res.json(user);
        }

        return res.status(400).json({ error: 'Usuário vazio!'});

    }
        
};