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
          message: err.message,
          error: err
        })
      })
  }
}

export const allPlants = () => {
  return dispatch => {
    dispatch(requestingPlant())
    request.get(`http://localhost:3000/db/plants/all`)
      .then(res => {
        dispatch(receivingPlant(res.body))
      })
      .catch(err => {
        return dispatch({
          type: 'PLANTS_REQ_FAILED',
          message: err.message,
          error: err
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
