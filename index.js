const express = require('express')
const cors = require('cors')
require('dotenv').config()

const db = require('./db')

const authRoutes = require('./routes/AuthRoutes')
const servicesRoutes = require('./routes/ServicesRoutes')
const providingServicesRoutes = require('./routes/ProvidingServicesRoutes')
const doctorRoutes = require('./routes/DoctorsRoutes')

const app = express()
app.use(cors())
app.use(express.json())
db()

app.use('/api/auth', authRoutes)
app.use('/api/services', servicesRoutes)
app.use('/api/p/service', providingServicesRoutes)
app.use('/api/doctor', doctorRoutes)


const port = 5000 || 8000
app.listen(port, console.log('Server Running on Port: ' + port))
