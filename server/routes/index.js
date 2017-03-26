const express = require('express')
const path = require('path')

const data = require('./data')

const router = express.Router()

router.use('/data', data)

router.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'index.html'))
})

module.exports = router
