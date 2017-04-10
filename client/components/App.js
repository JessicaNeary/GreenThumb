import React from 'react'

import Header from './Header'

export default React.createClass({
  render () {
    return (
      <div className='app'>
        <Header />
        {this.props.children}
      </div>
    )
  }
})
