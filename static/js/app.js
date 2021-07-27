var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);




d3.csv("data/top_mpgs.csv").then(function(new_car_data){
  //Parse Data/Cast as number
    new_car_data.forEach(function(data){
      data.make = +data.make;
      data.model = +data.model;
      data.year = +data.year;
      data.popularity = +data.popularity;
      data.highway_mpg = +data.highway_mpg;
      data.city_mpg = +data.city_mpg;
      data.msrp = +data.msrp;
      data.level_0 = +data.level_0;


    });
  // Step 2: Create scale functions
  var xLinearScale = d3.scaleLinear().domain([0,d3.max(new_car_data, d=> d.city_mpg)]).range([0,width]);
  var yLinearScale = d3.scaleLinear().domain([10,d3.max(new_car_data,d => d.highway_mpg)]).range([height,0]);

  // Step 3: Create axis functions

  var bottomAxis = d3.axisBottom(xLinearScale)
  var leftAxis = d3.axisLeft(yLinearScale);

  //Step 4: Append Axes to the charts

  chartGroup.append("g").attr("transform",`translate(0,${height})`).call(bottomAxis);

  chartGroup.append("g").call(leftAxis);


  // Step 5: create circles
  var circlesGroup = chartGroup.selectAll("circle")
    .data(new_car_data)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.city_mpg))
    .attr("cy", d => yLinearScale(d.highway_mpg))
    .attr("r", "15")
    .attr("fill", "blue")
    .attr("opacity", ".5");

    // Step 6: Initialize tool tip
    var toolTip = d3.tip()
      .attr("class", "tooltip")
      .offset([80, -60])
      .html(function(d) {
        return (`Make: ${d.make}  <br> Model: ${d.model}  <br> Model Year : ${d.year} <br> Popularity: ${d.popularity} <br> MSRP: ${d.msrp} <br> City MPG: ${d.city_mpg} <br>Highway MPG: ${d.highway_mpg}  `);
      });
    // Step 7: Create tooltip in the chart
    // ==============================
    chartGroup.call(toolTip);

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup.on("click", function(data) {
    toolTip.show(data, this);
    })
// onmouseout event
  .on("mouseout", function(data, index) {
    toolTip.hide(data);
    });
// Create axes labels
  chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 40)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .attr("class", "axisText")
        .text("Highway MPG");

      chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
        .attr("class", "axisText")
        .text("City MPG");
    }).catch(function(error) {
      console.log(error);
    });
