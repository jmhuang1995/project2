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
    zeroline: false
  },
  yaxis: {
    title: 'HP',
    showline: false
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
    zeroline: false
  },
  yaxis: {
    title: 'MPG',
    showline: false
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
