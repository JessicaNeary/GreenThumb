import request from 'superagent'

export const getCategories = () => {
  return dispatch => {
    dispatch(requestingCategories())
    const target = `http://localhost:3000/cat`

    request.get(target)
      .then(res => {
        dispatch(receivingCategories(res.body))
      })
      .catch(err => {
        return dispatch({
          type: 'CATEGORIES_REQ_FAILED',
          message: err.message
        })
      })
  }
}

export const requestingCategories = () => {
  return {
    type: 'REQUESTING_CATEGORIES'
  }
}

export const receivingCategories = data => {
  return {
    type: 'UPDATE_CATEGORIES',
    data
  }
}
