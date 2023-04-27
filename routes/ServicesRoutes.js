const router = require('express').Router()
const Services = require('../models/Services')

// new services
router.post('/new', async (req, res) => {
    // const statusCheck = await Services.findOne({status: "pending"})
    // if (statusCheck) {
    //     return res.status(400).json("You have an uncompleted services!")
    // }
    
    const newServices = new Services({
        ...req.body 
    })

    try {
        const savedService = await newServices.save()
        return res.status(200).json(savedService)
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router