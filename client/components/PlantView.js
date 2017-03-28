import React from 'react'

export default React.createClass({
  componentDidMount () {
    this.props.getPlant()
  },
  render () {
    const plant = this.props.plant
    const details = plant ? plant.name : null
    return (
      <div>
        <h3>Plants</h3>
        <h4>{details}</h4>
      </div>
    )
  }
})
