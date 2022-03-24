const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {
    async index(req, res) {
        const { user } = req.headers
        const loggedDev = await Dev.findById(user)

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user }},
                { _id: { $nin: loggedDev.likes }},
                { _id: { $nin: loggedDev.dislikes }},

            ]
        })
        
        return res.json(users)
        
    },
    
    async store(req, res) {
        const { username } = req.body;
        /**
         * Api connection
         * @author github
         * @param 'https://api.github.com/users/${username}'
         */
        const response = await axios.get(`https://api.github.com/users/${username}`)
        const { name, bio, avatar_url: avatar } = response.data

        /* Check if a user it's on DB */
        const ifUserExits = await Dev.findOne({ user: username })

        if(ifUserExits) {
            return res.json(ifUserExits)
        }

        /* Model create in DB */
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(dev)
    }
}