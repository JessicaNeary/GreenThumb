export default (state = [], action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case 'PLANT_REQ_SUCCESS':
      action.plants.forEach(function (plant) {
        if (!newState[plant.id]) {
          const object = {
            name: plant.name,
            seasons: [{
              season_id: plant.season_id,
              season_name: plant.season
            }]
          }
          newState[plant.id] = object
        } else {
          newState[plant.id].seasons.push({
            season_id: plant.season_id,
            season_name: plant.season
          })
        }
      })
      return newState

    default:
      return state
  }
}
