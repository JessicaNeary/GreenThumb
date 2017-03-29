import { connect } from 'react-redux'

import PlantView from '../components/PlantView'
import { getPlantById } from '../actions'

const mapStateToProps = state => {
  return {plant: state.plants[0]}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPlant: () => {
      const id = Number(ownProps.params.id)
      return dispatch(getPlantById(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantView)
