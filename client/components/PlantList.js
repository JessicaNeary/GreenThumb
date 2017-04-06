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
        const x = 100 + month.id * 40
        return (
          <rect key={month.id} x={x} width='40' height='20' />
        )
      })
      return (
        <div key={plant.id} className='plant'>
          <Link to={link}>
            <svg className='graph' width='580' height='20' y='0'>
              <text x='10' y='15'>{plant.name}</text>
              {seasons}
            </svg>
          </Link>
        </div>
      )
    })
    return (
      <div className='PlantList'>
        {graph}
      </div>
    )
  }
})