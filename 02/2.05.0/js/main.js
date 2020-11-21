/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

let svg = d3.select('#chart-area').append('svg').attr('width', 500).attr('height', 400)

svg.append('rect').attr('x', 0).attr('y', 0).attr('width', 50).attr('height', 50).attr('fill', 'purple')
svg.append('ellipse').attr('cx', 100).attr('cy', 100).attr('rx', 50).attr('ry', 100).attr('fill', 'green')
svg.append('line').attr('x1', 200).attr('y1', 250).attr('x2', 150).attr('y2', 50).attr('stroke', 'blue').attr('stroke-width', 10)