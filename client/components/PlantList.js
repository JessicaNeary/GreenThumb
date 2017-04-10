
import React from 'react'

import ListItem from './ListItem'

export default React.createClass({
  componentDidMount () {
    this.props.allPlants()
  },
  render () {
    const plants = this.props.plants
    const graph = plants ? plants.map(plant => {
      return <ListItem key={plant.id} plant={plant} />
    }) : null
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
