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

// get pending services
router.get('/current', async (req, res) => {
    const current = await Services.findOne({status: "pending"})
    return res.status(200).json(current)
})

// get all completed services
router.get('/completed', async (req, res) => {
    const completedList = await Services.find({status: "completed"})
    return res.status(200).json(completedList)
})

// get all orders (admin)
router.get('/all-orders', async (req, res) => {
    const allOrders = await Services.find()
    return res.status(200).json(allOrders)
})

// modify order (admin)
router.put('/:id', async (req, res) => {
    const orderItem = await Services.findByIdAndUpdate(req.params.id, req.body, {new: true})
    return res.status(200).json(orderItem)
})

module.exports = router