
exports.seed = function (knex, Promise) {
  return knex('seasons').del()
    .then(function () {
      return knex('seasons').insert([
        {id: 1, season: 'Early Summer'},
        {id: 2, season: 'Mid Summer'},
        {id: 3, season: 'Late Summer'},
        {id: 4, season: 'Early Autumn'},
        {id: 5, season: 'Mid Autumn'},
        {id: 6, season: 'Late Autumn'},
        {id: 7, season: 'Early Winter'},
        {id: 8, season: 'Mid Winter'},
        {id: 9, season: 'Late Winter'},
        {id: 10, season: 'Early Spring'},
        {id: 11, season: 'Mid Spring'},
        {id: 12, season: 'Late Spring'}
      ])
    })
}
