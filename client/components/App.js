import React from 'react'

import Home from '../containers/Home'

export default React.createClass({
  render () {
    return (
      <div className='app'>
        <h1>Welcome</h1>
        <Home />
      </div>
    )
  }
})
