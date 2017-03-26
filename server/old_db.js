/* DUMMY DATA */
module.exports = {
  getCategories
}

const categories = [{
    id: 1,
    name: 'Action figures'
  }, {
    id: 2,
    name: 'Arts/crafts'
  }, {
    id: 3,
    name: 'Bikes/trikes/ride ons'
  }, {
    id: 4,
    name: 'Building sets and blocks'
  }, {
    id: 5,
    name: 'Dolls'
  }, {
    id: 6,
    name: 'Dress up and role play'
  }, {
    id: 7,
    name: 'Educational'
  }, {
    id: 8,
    name: 'Gift cards'
  }, {
    id: 9,
    name: 'Games/puzzles'
  }, {
    id: 10,
    name: 'Nursery/preschool'
  }, {
    id: 11,
    name: 'Soft toys'
  }, {
    id: 12,
    name: 'Sport, outdoor & furniture'
  }, {
    id: 13,
    name: 'Vehicles hobbies & radio controlled'
  }]

function getCategories (callback) {
  setTimeout(() => {
    callback(null, categories)
  }, 1000)
}
