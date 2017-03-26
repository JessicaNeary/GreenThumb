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

function plantsBySeason (season) {
  return knex('season_relations')
    .join('seasons', 'seasons.id', '=', 'season_relations.season_id')
    .join('plants', 'plants.id', '=', 'season_relations.plant_id')
    .select('plants.name', 'plants.id', 'seasons.season', 'seasons.id as season_id')
    .where('seasons.id', season)
}

module.exports = {
  plantById,
  plantByName,
  plantsBySeason
}
