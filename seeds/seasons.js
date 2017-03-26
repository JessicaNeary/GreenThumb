
exports.seed = function (knex, Promise) {
  return knex('seasons').del()
    .then(function () {
      return knex('seasons').insert([
        {id: 1, season: 'summer_1'},
        {id: 2, season: 'summer_2'},
        {id: 3, season: 'summer_3'},
        {id: 4, season: 'autumn_1'},
        {id: 5, season: 'autumn_2'},
        {id: 6, season: 'autumn_3'},
        {id: 7, season: 'winter_1'},
        {id: 8, season: 'winter_2'},
        {id: 9, season: 'winter_3'},
        {id: 10, season: 'spring_1'},
        {id: 11, season: 'spring_2'},
        {id: 12, season: 'spring_3'}
      ])
    })
}
