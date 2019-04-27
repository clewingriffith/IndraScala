

//const gen = AppoloniusGenerator.apply();
const gen = GrandmaGenerator.build([1.887,-0.04],[1.91,0.2]);

const plotter = RecursiveLinePlot(gen, 5, 0.3);
const lines = plotter.build();


var scale = d3.scale.linear();
scale.domain([-100,100])
scale.range([0,2000]);


var lineFunction = d3.svg.line()
                         .x( d => scale(d[0]) )
                         .y( d => scale(d[1]) )
                         .interpolate("basis");


 var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 2000)
                                    .attr("height", 2000);

//The line SVG Path we draw
var lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(lines))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 0.5)
                            .attr("fill", "none");
