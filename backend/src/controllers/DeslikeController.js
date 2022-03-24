const Dev = require('../models/Dev')
module.exports = {
    async store(req, res) {
        /* getting the id for DB */
        const { devId } = req.params
        const { user } = req.headers

        const WhoIsLoggedDev = await Dev.findById(user)
        const WhoIsReceivingDeslikeDev = await Dev.findById(devId)

        /* Checking if exists */
        if(!WhoIsReceivingDeslikeDev) {
            return res.status(400).json({ error: "Dev doesn't exists" })
        }

        WhoIsLoggedDev.deslikes.push(WhoIsReceivingDeslikeDev._id);

        await WhoIsLoggedDev.save()

        return res.json(WhoIsLoggedDev)
    }
}