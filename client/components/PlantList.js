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
        let fill = 'black'
        if (month.id <= 3) fill = '#fff484'
        else if (month.id <= 6) fill = '#d65948'
        else if (month.id <= 9) fill = '#7bb1d1'
        else fill = '#a8e580'
        return (
          <rect key={month.id} x={x} width='40' height='20' fill={fill} />
        )
      })
      return (
        <div key={plant.id} className='plant'>
          <Link to={link}>
            <svg className='graph' width='620' height='20' y='0'>
              <text id='names' x='130' y='17' fill='#ffffff' textAnchor='end'>{plant.name}</text>
              {seasons}
            </svg>
          </Link>
        </div>
      )
    })

    return (
      <div className='PlantList'>
        <div className='headings'>
          <p>Summer</p>
          <p>Autumn</p>
          <p>Winter</p>
          <p>Spring</p>
        </div>
        {graph}
      </div>
    )
  }
})
