//function for dropdown
function init() {
    d3.json("data/cardata.json").then((data)=> {
    console.log(data);
    //set dropdown menu w/ id//
    data.ids.forEach((id) => {
        d3.select("#selDataset").append("option").text(id).property("value");
});
    plots(data.ids[0]);
    demoInfo(data.ids[0]);
});
};
//create function demographic data//
function demoInfo(id) {
    d3.json("data/cardata.json").then((data)=> {
        //call in metadata to demographic panel//
    var cardata = data.cars;
    var result = caredata.filter(car => car.index_col.toString() === id)[2]

    console.log(`test ${result}`)

        //select demographic panel from html//
    var features = d3.select("#cardata-cars");
        //empty the demographic panel for new data//
  features.html("");
    Object.entries(result).forEach((key) => {
        features.append("h5").text(key[0]+ ": " + key[1]);
        });
    });
};
//create function for data//
function plots(id) {
    d3.json("data/cardata.json").then((data)=> {
        console.log(data)
        var city_mpg = data.cars.map(data => data.city_mpg)[id]
        console.log(`City MPG: ${city_mpg}`);
        var highway_mpg = data.cars.map(data => data.highway_mpg)[id]
        console.log(`Highway MPG: ${highway_mpg}`);

        //bar chart//
    var trace= {
        x: ['City MPG','Highway MPG'],
        y: [city_mpg,highway_mpg],
        name: 'Chosen',
        marker: {
            color: 'skyBlue'
        },
        type:"bar",
        orientation: "v",
        };
    var trace2 = {
      x:['City MPG','Highway MPG'],
      y:[19.876,26.325],
      name: "Average",
      type: 'bar'
    }
    var data = [trace,trace2];
    var layout = {barmode: 'group'}
    Plotly.newPlot("bar", data,layout);

    var Average_HP = {
  x: ["1990",
"1991",
"1992",
"1993",
"1994",
"1995",
"1996",
"1997",
"1998",
"1999",
"2000",
"2001",
"2002",
"2003",
"2004",
"2005",
"2006",
"2007",
"2008",
"2009",
"2010",
"2011",
"2012",
"2013",
"2014",
"2015",
"2016",
"2017"],
  y: [141,
148,
151,
156,
157,
175,
174,
185,
190,
189,
183,
194,
196,
206,
215,
219,
230,
252,
256,
252,
249,
263,
266,
267,
292,
271,
274,
275],
  type: "line"
}


var Average_MPG = {
  x: ["1990",
"1991",
"1992",
"1993",
"1994",
"1995",
"1996",
"1997",
"1998",
"1999",
"2000",
"2001",
"2002",
"2003",
"2004",
"2005",
"2006",
"2007",
"2008",
"2009",
"2010",
"2011",
"2012",
"2013",
"2014",
"2015",
"2016",
"2017"],
  y: [23, 22, 24, 24, 23, 23, 23, 22, 21, 22 ,24, 23, 22, 22, 23, 23, 21, 22, 23, 24, 25, 26, 27, 28, 29, 29, 28],
  type: "line"
};

var data = [Average_HP];
var data2 = [Average_MPG];

var layout = {
  title: "Avg HP",
  xaxis: {
    title: 'Years',
    showgrid: false,
    zeroline: false,
    autotick: false,
    ticks: 'outside',
    tick0: 0,
    dtick: 1,
    ticklen: 5,
    tickwidth: 1,
    tickcolor: '#000'
  },
  yaxis: {
    title: 'HP',
    showline: false,
    autotick: false,
    ticks: 'outside',
    tick0: 0,
    dtick: 10,
    ticklen: 5,
    tickwidth: 1,
    tickcolor: '#000'
  },
  shapes:[{
    type: 'line',
    x0: 1990,
    y0: 249,
    x1: 2017,
    y1: 249,
    opacity: 0.7,
    line: {
      color: 'red',
      width: 2
    }
  }],
};

var layout2 = {
  title: "Avg MPG",
  xaxis: {
    title: 'Years',
    showgrid: false,
    zeroline: false,
    autotick: false,
    ticks: 'outside',
    tick0: 0,
    dtick: 1,
    ticklen: 5,
    tickwidth: 1,
    tickcolor: '#000'
  },
  yaxis: {
    title: 'MPG',
    showline: false,
    autotick: false,
    ticks: 'outside',
    tick0: 0,
    dtick: 1,
    ticklen: 5,
    tickwidth: 1,
    tickcolor: '#000'
  },
    shapes:[{
    type: 'line',
    x0: 1990,
    y0: 26.6,
    x1: 2017,
    y1: 26.6,
    opacity: 0.7,
    line: {
      color: 'red',
      width: 2
    }
  }],
};

Plotly.newPlot("plot", data, layout);
Plotly.newPlot("plot2", data2, layout2);

});
}
init();
//change function//
    function optionChanged(id){
    plots(id);
    demoInfo(id);
};
