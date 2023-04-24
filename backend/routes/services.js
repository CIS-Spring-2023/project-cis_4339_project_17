//js file for services functionality - SP3 

const express = require('express')
const router = express.Router()
const app = express()
const org = process.env.ORG

app.use(app.js)

//might need to add to models.js
const { services } = require('../models/models')

const port = 3000

// POST new service - SP3
router.post('/CREATEServices', (req, res, next) => {
    const newService = req.body
    newService.services = [services]
    services.create(newService, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// GET 10 most recent services for CREATE Services page - SP3
router.get('/CREATEServices', (req, res, next) => {
    services
      .find({ services: services }, (error, data) => {
        if (error) {
          return next(error)
        } else {
          return res.json(data)
        }
      })
      // sort by id ascending
      .sort({ id: 1 })
      .limit(10)
})
  
// GET 10 most recent services for EDIT Services page - SP3
router.get('/EDITServices', (req, res, next) => {
    services
      .find({ services: services }, (error, data) => {
        if (error) {
          return next(error)
        } else {
          return res.json(data)
        }
      })
      // sort by id ascending
      .sort({ id: 1 })
      .limit(10)
  })

// hard DELETE services by ID as per project specifications
router.delete('/:id', (req, res, next) => {
    events.findByIdAndDelete(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else if (!data) {
        res.status(400).send('Service not found')
      } else {
        res.send('Service deleted')
      }
    })
  })
  
  module.exports = router