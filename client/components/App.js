import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='app'>
        <h1>Welcome</h1>
        {this.props.children}
      </div>
    )
  }
})
