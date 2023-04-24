/* eslint-disable prettier/prettier */
//js file for users functionality - SP3

const express = require('express')
const router = express.Router()
const app = express()
const org = process.env.ORG

app.use(app.js)

//might need to add to models.js
const { users } = require('../models/models')

const port = 3000

//register user (not mandatory) - SP3

router.post('/Login', (req, res, next) => {
    const newUser = req.body
    newUser.users = [users]
    Users.create(newUser, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

app.get = ('/', (req, res) => {
    res.send('Test')
})

module.exports = router