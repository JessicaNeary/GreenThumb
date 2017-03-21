import { connect } from 'react-redux'

import Home from '../components/Home'
import { getCategories } from '../actions'

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => { return dispatch(getCategories()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
