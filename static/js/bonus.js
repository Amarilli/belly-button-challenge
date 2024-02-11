// Create a constant variable where to place the URL
const URL = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// Fetch the json data and console log it
d3.json(URL).then(function(data) {
    console.log(data);

}); 

//Initializing the dashboard 
function init() {
    // D3 and dropdown menu
    let dropdownMenu = d3.select('#selDataset');
     //Using D3 getting access to sample data
     d3.json(URL).then((data) => {

        // Declaring a variable to store names
        let names = data.names;
        console.log(names);

        // Add samples to dropdown menu
        names.forEach(function(id){
            // Append each name as an option to the drop down menu
            dropdownMenu.append('option').text(id).property('value', id);
        });

        // Assign the first name to name variable
        let name_one = names[0];

        // Log name_one
        console.log(name_one);

        //Build the gauge chart
        GaugeChart(name_one);
    });

};

// Create a function that build the gauge chart
function GaugeChart(sample) {
    //Using D3 to access the sample data and populate the gauge chart
    d3.json(URL).then((data) => {

        // Get the demographic information (i.e. metadata) using D3
        let metadata = data.metadata;
        //Filter
        let results = dmetadata.filter(id => id.id == sample);
        // Access the first result and store it in results filter
        let first_result = results[0];
        console.log(first_result);
        //Use Object.entries to get the key/value pairs and put info
        let scrubsWeek = Object.values(first_result)[6];

        //Gauge Chart's trace
        // Setting a constant for shade of green 
        const shadesOfGreen = [
            '#00FF00', // Lime
            '#00EE00',
            '#00DD00',
            '#00CC00',
            '#00BB00',
            '#00AA00',
            '#009900', // Green
            '#008800',
            '#007700',
            '#006600',
            '#005500',
            '#004400',
            '#003300',
            '#002200',
            '#001100',
            '#000000'  // Black
          ];
          
          let gauge_chart_trace = {
            value: scrubsWeek,
            domain: {x: [0,1],y: [0,1]},
            title: {
                text: '<b>Belly Button Washing Frequency</b><br>Scrubs per Week',
                font: {color: 'black', size: 16}
            },
            type: 'indicator',
            mode: 'gauge+number',
            gauge: {
                axis: { range: [0,10], tickmode: 'linear', tick0: 2, dtick: 2 },
                bar: { color: 'black' },
                steps: [
                    { range: [0, 1], color: shadesOfGreen[0] }, // Lighter shade of green
                    { range: [1, 2], color: shadesOfGreen[1] },
                    { range: [2, 3], color: shadesOfGreen[2] },
                    { range: [3, 4], color: shadesOfGreen[3] },
                    { range: [4, 5], color: shadesOfGreen[4] },
                    { range: [5, 6], color: shadesOfGreen[5] },
                    { range: [6, 7], color: shadesOfGreen[6] },
                    { range: [7, 8], color: shadesOfGreen[7] },
                    { range: [8, 9], color: shadesOfGreen[8] }, // Darker shade of green
                ]
            }
        };
        
        //Set the layout
        let layout = {
            width: 400,
            height: 400,
            margin: {t: 0, b:0}
        };

        //Call Plotly
        Plotly.newPlot('gauge', [gauge_chart_trace], layout)

    });
};

//init func
init();