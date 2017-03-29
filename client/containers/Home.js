import { connect } from 'react-redux'

import Home from '../components/Home'
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
