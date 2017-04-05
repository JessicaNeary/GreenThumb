import { connect } from 'react-redux'

import PlantList from '../components/PlantList'
import { allPlants } from '../actions'

const mapStateToProps = state => {
  return {
    plants: state.plants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    allPlants: () => { return dispatch(allPlants()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantList)
