import React from 'react'

var d3 = require("d3")

export default React.createClass({
  componentDidMount () {
    this.props.allPlants()

  },
  render () {
    var body = d3.select("body")
    var div = body.append("div")
    div.html("Hello, world!")
    const plants = this.props.plants
    const list = plants ? plants.map(plant => {
                  return  <div key={plant.id}>{plant.name}</div>
                  }) : <p>No data found</p>
    return (
      <div>
        <h4>Home</h4>
        <div>
        {list}
        </div>
      </div>
    )
  }
})
