const express = require('express')

const data = require('./data')

const router = express.Router()

router.use('/db', data)

module.exports = router
