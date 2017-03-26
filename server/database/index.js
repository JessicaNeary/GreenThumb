const knex = require('./knex')

/* FUNCTIONS FOR UPDATING DATABASE */
function plantById (id) {
  return knex('plants')
    .where('id', id)
}

function plantByName (name) {
  return knex('plants')
    .where('name', 'like', name)
    .orWhere('other_name', 'like', name)
}

module.exports = {
  plantById,
  plantByName
}
