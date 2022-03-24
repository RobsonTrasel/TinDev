const Dev = require('../models/Dev')
module.exports = {
    async store(req, res) {
        const { devId } = req.params
        const { user } = req.headers

        const WhoIsLoggedDev = await Dev.findById(user)
        const WhoIsReceivingLikeDev = await Dev.findById(devId)

        if(!WhoIsReceivingLikeDev) {
            return res.status(400).json({ error: "Dev doesn't exists" })
        }

        if(WhoIsReceivingLikeDev.likes.includes(WhoIsLoggedDev._id)) {
            console.log('DEU MATCH')
        }

        WhoIsLoggedDev.likes.push(WhoIsReceivingLikeDev._id);

        await WhoIsLoggedDev.save()

        return res.json(WhoIsLoggedDev)
    }
}