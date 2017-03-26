const server = require('./server')

const PORT = process.env.PORT || 5432

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
