/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

let svg = d3.select("#chart-area").append("svg").attr("width", 400).attr("height", 400)

svg.append("circle").attr("cx", 200).attr("cy", 250).attr("r", 100).attr("fill", "blue")