import React from 'react'

export default React.createClass({
  componentDidMount () {
    this.props.getPlant()
  },
  render () {
    const plant = this.props.plant
    return (
      <div>
        <h4>{plant.name}</h4>
      </div>
    )
  }
})
