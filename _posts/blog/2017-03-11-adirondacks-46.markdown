---
layout: post
comments: true
title:  "The Adirondacks 46 peaks TODO list"
date:   2017-03-11T09:00:00Z
categories: blog
tags: adventure TODO camping trips
---
<style>

.axis .domain {
  
}
div.tooltip {   
  position: absolute;           
  text-align: center;           
  width: 150px;                  
  height: 46px;                 
  padding: 2px;             
  font: 12px sans-serif;        
  background: white;   
  border: 0px;      
  border-radius: 8px;           
  pointer-events: none;         
}
</style>
To complete the ascension of every peak in the Adirondacks. I am aiming to accomplish this by the age of 30. "The mountains are calling and I must go." 😎

Chart of the 46 peaks ordered by highest altitude.
<div style="overflow-x: auto;">
<svg width="650" height="600"></svg>
</div>
Table of the 46 peaks ordered by smallest. Including those that have been completed.
<div id="peaks_table">
	<table class="table"> 
	<thead>
		<th>Status</th>
		<th>Name of mountain</th>
		<th>Altitude</th>
		<th>Elevation Gain</th>
	</thead>
	<tbody class="mountain_data">
	</tbody>
	</table>
</div>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.4.3/tabletop.min.js"></script>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script>
var peaks;
var d3Data = [];
window.onload = function () { init() };
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/13yxqxJADhS-zE_YPxFFpRx-uAMejuWpQEMTgDoQps_g/pubhtml';
	function init() {
			Tabletop.init({
			key: public_spreadsheet_url,
			callback: showInfo
		})
	}
	function showInfo(table_data, tabletop) {
		//alert("Successfully processed!")
		peaks = table_data.Sheet1.elements;
		for (var i = peaks.length - 1; i >= 0; i--) {
			$( ".mountain_data" ).append('\
				<tr>\
				<td class="mountain_check">'+ peaks[i].Done +'</td>\
				<td class="mountain_name">'+ peaks[i].Name + '</td>\
				<td class="mountain_elevation">'+ peaks[i].Elevation +'</td>\
				<td class="mountain_delta">'+ peaks[i].Gain +'</td>\
				</tr>');
		}

}
</script>

<script src="https://d3js.org/d3.v4.min.js"></script>
<script>
var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 100, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g")
    	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var z = d3.scaleOrdinal()
    .range(["#388E3C", "#388E3C"]);
var div = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);

d3.csv("/assets/46Peaks.csv", function(d, i, columns) {
  for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
  d.total = t;
  return d;
}, function(error, data) {
  if (error) throw error;

  var keys = data.columns.slice(1);

  data.sort(function(a, b) { return b.total - a.total; });
  x.domain(data.map(function(d) { return d.Name; }));
  y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
  z.domain(keys);

  g.append("g")
    .selectAll("g")
    .data(d3.stack().keys(keys)(data))
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("x", function(d) { return x(d.data.Name); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
      .attr("width", x.bandwidth())
      .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html(d.data.Name + "<br/> Summit: "  + d.data.total + "<br/> Elevation Gain: "  + d.data['Delta Altitude'])  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 28) + "px");    
            })       

  g.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
   	  .selectAll("text")
    	.attr("y", 0)
    	.attr("x", 9)
    	.attr("dy", ".35em")
    	.attr("transform", "rotate(60)")
    	.style("text-anchor", "start")


  g.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
      .attr("x", 2)
      .attr("y", y(y.ticks().pop()) + 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("Altitude");
  
  var legend = g.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; })

  // // side rectangles
  // legend.append("rect")
  //     .attr("x", width - 19)
  //     .attr("width", 19)
  //     .attr("height", 19)
  //     .attr("fill", z);
  // // side text
  // legend.append("text")
  //     .attr("x", width - 24)
  //     .attr("y", 9.5)
  //     .attr("dy", "0.32em")
  //     .text(function(d) { return d; })
});
</script>