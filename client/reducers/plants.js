export default (state = [], action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case 'PLANT_REQ_SUCCESS':
      newState = action.plant
      return newState

    default:
      return state
  }
}
