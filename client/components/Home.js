import React from 'react'

export default React.createClass({
  componentDidMount () {
    this.props.allPlants()
  },
  render () {
    const plants = this.props.plants
    const plantList = plants
      ? plants.map(plant => {
        <div>{plant.name}</div>
      }) : null
    return (
      <div>
        <h4>Home</h4>
        <div>{plantList}</div>
      </div>
    )
  }
})
