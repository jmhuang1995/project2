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
    var car_data = data.cars;
    var result = car_data.filter(car => car.index_col.toString() === id)[0]

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
    };
    var data = [trace,trace2];
    var layout = {barmode: 'group'};
    Plotly.newPlot("bar", data,layout);
});


  d3.json("data/cardata2.json").then((data)=>{
    var engine_hp = data.cars.map(data=> data.engine_hp)[id]

    var trace3 = {
    x: ["Engine Horsepower"],
    y: [engine_hp],
    name: "Horsepower",
    type: "bar"
  };


    var trace4 = {
    x: ["Engine Hrosepower"],
    y: [249.38],
    name: "Average Horsepower",
    type: "bar"
  };

    var data = [trace3,trace4];

    var layout = {
    barmode: 'group'};

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
var data2 = [Average_MPG];
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
