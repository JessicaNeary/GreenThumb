const INITIAL_STATE = {
  plant: {}
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'PLANT_REQ_SUCCESS':
      newState.plant = action.plant
      return newState

    default:
      return state
  }
}

export default reducer
