exports.up = function (knex, Promise) {
  return knex.schema.createTable('plants', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('scientific name')
    table.integer('planting_time').references('seasons.id')
    table.integer('days_to_maturity')
    table.integer('sowing distance')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('plants')
}
