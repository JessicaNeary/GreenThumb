var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/cat', function (req, res) {
  db.getCategories((err, products) => {
    if (!err) res.json(products)
    else return res.status(500).send(err.message)
  })
})

module.exports = router
