import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    const plant = this.props.plant
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
      <Link to={link}>
        <svg className='graph' width='620' height='20' y='0'>
          <text id='names' x='130' y='17' fill='#ffffff' textAnchor='end'>{plant.name}</text>
          {seasons}
        </svg>
      </Link>
    )
  }
})
