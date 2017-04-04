import React from 'react'

var d3 = require('d3')

export default React.createClass({
  componentDidMount () {
    this.props.allPlants()
  },
  render () {
    const data = [
      {
        name: 'cabbage',
        seasons: [
          {id: 1},
          {id: 2},
          {id: 4},
          {id: 5}
        ]
      },
      {
        name: 'carrot',
        seasons: [
          {id: 1},
          {id: 3},
          {id: 4},
          {id: 6}
        ]
      }
    ]

    d3.select('.content').append('div')
      .selectAll('svg')
      .data(data)
      .enter()
      .append('svg')
      .attr('width', 500)
      .attr('height', 100)
      .append('text')
      .text(function (d) {
        return d.name
      })
      .attr('y', 10)
    d3.selectAll('svg').selectAll('rect')
        .data(function (d) {
          return d.seasons
        })
        .enter()
        .append('rect')
        .attr('width', 40)
        .attr('height', 20)
        .attr('x', function (d) {
          return 15 + d.id * 40
        })
        .style('fill', 'green')
    return (
      <div>
        <h4>Home</h4>
        <div className='content'>
        </div>
      </div>
    )
  }
})
