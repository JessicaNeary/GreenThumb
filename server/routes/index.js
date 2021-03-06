var express = require('express')
var router = express.Router()

var db = require('../database')

router.get('/:id', function (req, res) {
  const id = req.params.id
  db.plantById(id)
    .then(plant => {
      return res.json(plant)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/name/:name', function (req, res) {
  const name = req.params.name.toLowerCase()
  db.plantByName(name)
    .then(plant => {
      return res.json(plant)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/season/:seasonId', function (req, res) {
  const id = req.params.seasonId
  db.plantsBySeason(id)
    .then(plants => {
      return res.json(plants)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/plants/all', function (req, res) {
  db.allPlants(req.body)
    .then(plants => {
      return res.json(plants)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
