export default (state = [], action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case 'PLANT_REQ_SUCCESS':
      action.plants.forEach(function (plant) {
        if (!newState[plant.id]) {
          const object = {
            id: plant.id,
            name: plant.name,
            seasons: [{
              id: plant.season_id,
              name: plant.season
            }]
          }
          newState[plant.id] = object
        } else {
          newState[plant.id].seasons.push({
            id: plant.season_id,
            name: plant.season
          })
        }
      })
      return newState

    default:
      return state
  }
}
