import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  componentDidMount () {
    this.props.allPlants()
  },
  render () {
    const plants = this.props.plants
    const convertedData = Object.keys(plants).map(key => plants[key]) // turns object into array so it can be parsed by d3
    const graph = convertedData.map(plant => {
      const link = 'plant/' + plant.id
      const seasons = plant.seasons.map(month => {
        const x = 15 + (month.id * 40)
        return (
          <rect x={x} width='40' height='20' />
        )
      })
      return (
        <div className='plant'>
          <Link to={link}>
            {plant.name}
            <svg width='500' height='100'>
              {seasons}
            </svg>
          </Link>
        </div>
      )
    })
    return (
      <div>
        <h4>Home</h4>
        <div className='content'>
          {graph}
        </div>
      </div>
    )
  }
})
