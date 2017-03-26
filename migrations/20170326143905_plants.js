exports.up = function (knex, Promise) {
  return knex.schema.createTable('plants', function (table) {
    table.increments('id').unsigned().primary()
    table.string('name')
    table.string('scientific_name')
    table.string('other_name').nullable()
    table.string('type')
    table.string('harvest')
    table.string('sowing_distance')
    table.string('ideal_tempreture')
    table.string('instructions')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('plants')
}
