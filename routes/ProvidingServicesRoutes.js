const router = require('express').Router()
const ProvidingServices = require('../models/ProvidingServices')

// add new services
router.post('/', async (req, res) => {
    const newServices = new ProvidingServices({
        ...req.body
    })

    try {
        const savedServices = await newServices.save()

        return res.status(200).json(savedServices)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    const allServicesList = await ProvidingServices.find()

    return res.status(200).json(allServicesList)
})


router.delete('/:id', async (req, res) => {
    await ProvidingServices.findByIdAndDelete(req.params.id)
    return res.status(200).json('Deleted Successfully')
})

module.exports = router