import React from 'react'

export default React.createClass({
  componentDidMount () {
    this.props.getPlant()
  },
  render () {
    const plant = this.props.plant
    const otherName = plant && plant.other_name ? <li>Also known as a {plant.other_name.toLowerCase()}</li> : null
    const details =
      plant
      ? <div className='details'>
        <h3>{plant.name}</h3>
        <ul>
          <li>{plant.scientific_name}</li>
          {otherName}
          <li>{plant.type}</li>
          <li>Harvest in {plant.harvest}</li>
          <li>Sowing distance: {plant.sowing_distance}</li>
          <li>Ideal tempreture: {plant.ideal_tempreture}</li>
        </ul>
        <div>{plant.instructions}</div>
      </div>
      : <div>Nothing found</div>
    return (
      details
    )
  }
})
