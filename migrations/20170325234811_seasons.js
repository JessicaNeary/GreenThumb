exports.up = function (knex, Promise) {
  return knex.schema.createTable('seasons', function (table) {
    table.increments('id').primary()
    table.string('season')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('seasons')
}
