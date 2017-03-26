import request from 'superagent'

export const getPlantById = id => {
  return dispatch => {
    dispatch(requestingPlant())

    request.get(`http://localhost:3000/db/${id}`)
      .then(res => {
        dispatch(receivingPlant(res.body))
      })
      .catch(err => {
        return dispatch({
          type: 'PLANT_REQ_FAILED',
          message: err.message
        })
      })
  }
}

const requestingPlant = () => {
  return {
    type: 'REQUESTING_PLANT'
  }
}

const receivingPlant = plant => {
  return {
    type: 'PLANT_REQ_SUCCESS',
    plant
  }
}
