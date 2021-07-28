       
       function init() {
           d3.json("/").then((data)=> {
           console.log(data);
           
           data.forEach((car) => {
               d3.select("#selDataset").append("option").text(models).property("value");
       });
           plots(data[0]);
           demoInfo(data[0]);
       });
       };
       
       function demoInfo(model) {
           d3.json("/").then((data)=> {
               
           var metadata = data;
           var result = metadata.filter(meta => meta.model.toString() === model)[0];
               
           var features = d3.select("#sample-metadata");
               
           demographics.html("");
           Object.entries(result).forEach((key) => {
               features.append("h5").text(key[0]+ ": " + key[1]);
               });
           });
       };
      
       function plots(model) {
           d3.json("/").then((data)=> {
               console.log(data)
               var city_mpg = data.city_mpg.filter(s => s.model.toString() === model)[0];
               console.log(`City MPG: ${city_mpg}`);
               var highway_mpg = data.highway_mpg.filter(s => s.model.toString() === model)[0];
               console.log(`Highway MPG: ${highway_mpg}`);
               var MSRP = data.MSRP_mpg.filter(s => s.model.toString() === model)[0];
               console.log(`MSRP: ${MSRP}`);
               var Engine_HP = data.Engine_HP.filter(s => s.model.toString() === model)[0];
               console.log(`Engine HP: ${Engine_HP}`);
        //Polar Area Chart//
    const data = {
        lables: [
            'Engine HP',
            'City MPG',
            'Hightway MPG'
            'MSRP'
        ],
        datasets: [{
            labels: 'Car Selected',
            data: [console.log(data)],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)' 
            ]

        }]
    };