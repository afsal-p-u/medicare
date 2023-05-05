const router = require('express').Router()

const Doctor = require('../models/Doctors')

// add new doctor
router.post('/', async (req, res) => {
    const newDoctor = new Doctor({
        ...req.body
    })

    try {
        const savedDoctor = await newDoctor.save()

        return res.status(200).json(savedDoctor)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    const data = await Doctor.find()

    return res.status(200).json(data)
})

module.exports = router