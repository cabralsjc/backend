const Sms = require('../models/Sms');

module.exports = {
    async index(req, res){
        const user = req.params.userName;
        console.log(user);
        
        const loggedUser = await Sms.find({
            user: user,
        });
        console.log(user);
    return res.json(loggedUser);
    
    },

    async store(req, res){
    const {mensagem} = req.body;
        
    if(mensagem){
            const sms = await Sms.create({
                user: req.params.userName,
                mensagem: mensagem,
            });
            
            if(!sms){
                return res.status(400).json({ error: 'Sms não foi salva.'});
            }
            return res.json(sms);
        }    
        return res.status(400).json({ error: 'Mensagem vazia!'});
        
    }
};

