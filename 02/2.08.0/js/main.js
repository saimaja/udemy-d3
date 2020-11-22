/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

let svg = d3.select('#chart-area').append('svg').attr('width', 500).attr('height', 500)


d3.json('/data/buildings.json').then(data => {
    data.forEach(d => {
        d.height = Number(d.height)
    })

    let rectangles = svg.selectAll('rect').data(data)

    rectangles.enter().append('rect')
        .attr('x', (d, i) => (i * 60))
        .attr('y', 50)
        .attr('width', 30)
        .attr('height', d => d.height)
        .attr('fill', 'blue')

})

