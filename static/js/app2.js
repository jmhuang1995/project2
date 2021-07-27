//function for dropdown
function init() {
    d3.json("/").then((data)=> {
    console.log(data);
    //set dropdown menu w/ id//
    data.forEach((car) => {
        d3.select("#selDataset").append("option").text(models).property("value");
});
    plots(data[0]);
    demoInfo(data[0]);
});
};
//create function demographic data//
function demoInfo(model) {
    d3.json("/").then((data)=> {
        //call in metadata to demographic panel//
    var metadata = data;
    var result = metadata.filter(meta => meta.model.toString() === model)[0];
        //select demographic panel from html//
    var demographics = d3.select("#sample-metadata");
        //empty the demographic panel for new data//
    demographics.html("");
    Object.entries(result).forEach((key) => {
        demographics.append("h5").text(key[0]+ ": " + key[1]);
        });
    });
};
//create function for data//
function plots(model) {
    d3.json("/").then((data)=> {
        console.log(data)
        var city_mpg = data.city_mpg.filter(s => s.model.toString() === model)[0];
        console.log(`City MPG: ${city_mpg}`);
        var highway_mpg = data.highway_mpg.filter(s => s.model.toString() === model)[0];
        console.log(`Highway MPG: ${highway_mpg}`);

    // var wfreq = data.map(data => data.wfreq)
    // console.log(`Washing Freq:  ${wfreq}`)
    // var samples = data.samples.filter(s => s.id.toString() === id)[0];
    // console.log(`Samples: ${samples}`)
    // var sampleValues = samples.sample_values.slice(0, 10).reverse();
    // console.log(`Sample Values: ${sampleValues}`);
    // var OTU = (samples.otu_ids.slice(0, 10)).reverse();
    // console.log(`OTU: ${OTU}`)
    // var OTU_id = OTU.map(d => "OTU " + d)
    // console.log(`OTU IDS: ${OTU_id}`);
    // var lables = samples.otu_labels.slice(0, 10).reverse();
    // console.log(`lables: ${lables}`);

        //bar chart//
    var trace= {
        x: ['City MPG','Highway MPG'],
        y: [city_mpg,highway_mpg],
        text: lables,
        marker: {
            color: 'skyBlue'
        },
        type:"bar",
        orientation: "v",
        };
    var data = [trace];
    Plotly.newPlot("bar", data);

});
}
init();
//change function//
    function optionChanged(model){
    plots(model);
    demoInfo(model);
};
