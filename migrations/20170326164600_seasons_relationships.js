
exports.up = function (knex, Promise) {
  return knex.schema.createTable('season_relations', function (table) {
    table.increments('id').primary()
    table.integer('season_id').references('seasons.id')
    table.integer('plant_id').references('plants.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('season_relations')
}
