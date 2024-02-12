// Fetch the JSON data and console log it
d3.json(URL).then(function(data) {
    console.log(data);
}); 

// Initializing the dashboard 
function init() {
    // D3 and dropdown menu
    let dropdownMenu = d3.select('#selDataset');
    // Using D3 getting access to sample data
    d3.json(URL).then((data) => {

        // Declaring a variable to store names
        let names = data.names;

        // Add samples to dropdown menu
        names.forEach((id) => {
            console.log(id);
             // Append each name as an option to the drop down menu
            dropdownMenu.append('option')
            .text(id)
            .property('value', id);

        });

        // Assign the first name to name variable
        let name_one = names[0];

        // Log name_one
        console.log(name_one);

        // Build the gauge chart
        GaugeChart(name_one);
    });
};

// Create a function that builds the gauge chart
function GaugeChart(sample) {
    // Using D3 to access the sample data and populate the gauge chart
    d3.json(URL).then((data) => {

        // Get the demographic information (i.e. metadata) using D3
        let metadata = data.metadata;
        // Filter
        let value = metadata.find(result => result.id == sample); // directly access the first item
        // Access the value and console log it
        console.log(value);

        // Get the washing frequency value
        let scrubsWeeks = value.wfreq;

        // Gauge Chart's trace
        let gauge_chart_trace = {
            value: scrubsWeeks,
            domain: {x: [0,1], y: [0,1]},
            title: {
                text: '<b>Belly Button Washing Frequency</b><br>Scrubs per Week', 
                font: {color: 'black', size: 16}
            },
            type: 'indicator',
            mode: 'gauge+number',
            gauge: {
                axis: { range: [0,10], tickmode: "linear", tick0: 2, dtick: 2},
                bar: { color:"black"},
                steps: [ 
                    { range: [0, 1], color: "rgba(255, 255, 255, 0)"}, // lighter shade
                    { range: [1, 2], color: "rgba(232, 226, 202, .5)"},
                    { range: [2, 3], color: "rgba(210, 206, 145, .5)"},
                    { range: [3, 4], color:  "rgba(202, 209, 95, .5)"},
                    { range: [4, 5], color:  "rgba(184, 205, 68, .5)"},
                    { range: [5, 6], color: "rgba(170, 202, 42, .5)"},
                    { range: [6, 7], color: "rgba(142, 178, 35 , .5)"},
                    { range: [7, 8], color:  "rgba(110, 154, 22, .5)"},
                    { range: [8, 9], color: "rgba(50, 143, 10, 0.5)"},
                    { range: [9, 10], color: "rgba(14, 127, 0, .5)"} // Darker
                ],
                labels: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', ''],
                hoverinfo: 'text',
            }
        };

        // Set the layout
        let layout = {
            width: 550,
            height: 550,
            margin: {t: 0, b:0}
        };

        // Call Plotly
        Plotly.newPlot('gauge', [gauge_chart_trace], layout);
    });
};

// Init func
init();


