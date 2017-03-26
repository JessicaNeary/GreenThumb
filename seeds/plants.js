exports.seed = function (knex, Promise) {
  return knex('plants').del()
    .then(function () {
      return knex('plants').insert([
        {id: 10001, name: 'Carrot', scientific_name: 'Daucus carota', type: 'Biennial (grown as annual)', harvest: '12 - 18 weeks', sowing_distance: '5 - 30 cm', ideal_tempreture: '8\xB0C to 30\xB0C', instructions: 'Sow in garden at a depth of approx. three times the seed diameter'},
        {id: 10002, name: 'Cabbage', scientific_name: 'Brassica oleracea', type: 'Biennial (grown as annual)', harvest: '11 - 15 weeks', sowing_distance: '50 - 75 cm', ideal_tempreture: '5\xB0C to 18\xB0C', instructions: 'Sow at depth approx. three times the diameter of the seed. For best results, grow seed in trays and transplant to outside after 4-6 weeks.'},
        {id: 10003, name: 'Lettuce', scientific_name: 'Lactuca sativa', type: 'Annual', harvest: '8 - 12 weeks', sowing_distance: '20 - 30 cm', ideal_tempreture: '8\xB0C to 27\xB0C', instructions: 'Sow in garden at a depth of approx. three times the seed diameter. Can also be planted in trays and transplanted outside after 4-6 weeks'},
        {id: 10004, name: 'Broccoli', scientific_name: 'Brassica oleracea', type: 'Biennial (some varieties are annuals or perennials)', harvest: '10 - 16 weeks', sowing_distance: '35 - 50 cm', ideal_tempreture: '7\xB0C to 30\xB0C', instructions: 'Sow in seed trays at a depth of approx. three times the seed diameter. Transplant outside after 4-6 weeks'},
        {id: 10005, name: 'Capsicum', other_name: 'Bell pepper', scientific_name: 'Capsicum annuum', type: 'Annual (sometimes perennial)', harvest: '10 - 12 weeks', sowing_distance: '20 - 50 cm', ideal_tempreture: '18\xB0C to 35\xB0C', instructions: 'Sow in seed trays at a depth of approx. three times the seed diameter. Transplant outside after 4-6 weeks'}
      ])
    })
}
