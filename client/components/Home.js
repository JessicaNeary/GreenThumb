import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <h4>Home</h4>
        <Link to='/plant/10001'>Carrot</Link>
      </div>
    )
  }
})
