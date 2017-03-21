const INITIAL_STATE = {
  categories: []
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'UPDATE_CATEGORIES':
      newState.categories = action.data
      return newState

    default:
      return state
  }
}

export default reducer
