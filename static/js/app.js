// Create a constant variable where to place the URL
const URL = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// Fetch the json data and console log it
d3.json(URL).then(function(data) {
    console.log(data);

}); 

//Initializing the dashboard by creating the init function
function init() {

        // Use D3 to select dropdown menu
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

        // Build the plots: a demographic panel, a bar chart, a bubble chart, and a gauge chart
        BarChart(name_one);
        BubbleChart(name_one);
        Metadata(name_one);
        GaugeChart(name_one);

    }); // Ending D3 access
};




// Build the bar chart
// It is a horizontal bar chart with a dropdown menu to display the top 10 OTUs 
function BarChart(sample){
    //Use D3 to access the sample data for populating the bar chart
    d3.json(URL).then((data) => {
        let  sample_data = data.samples;
        // Apply a filter based on name_one
        let results = sample_data.filter(id => id.id == sample);
        // Access the first result and store it in results filter
        let first_result = results[0];
        console.log(first_result);
        // I want to display in the bar chart the first 10 results
        let sample_values = first_result.sample_values.slice(0,10);
        let otu_ids = first_result.otu_ids.slice(0,10);
        let otu_labels = first_result.otu_labels.slice(0,10);
        console.log(sample_values);
        console.log(otu_ids);
        console.log(otu_labels);

        //Bar Chart's trace
        let bar_chart_trace = {
            x: sample_values.reverse(),
            y: otu_ids.map(item => `OTU ${item}`).reverse(),
            text: otu_labels.reverse(),
            type: 'bar',
            orientation: 'h',
            

        };
        
        let layout = {title: { 
            text: '<b>Top 10 OTUs found</b>',
        font: {size: 16, color: 'black'},
        },
        paper_bgcolor: "lavender",
    };
        Plotly.newPlot('bar', [bar_chart_trace], layout);
    });
};

// Build the bubble chart
function BubbleChart(sample){
    //Using D3 to access the sample data and populate the bubble chart
    d3.json(URL).then((data) => {
        let sampleData = data.samples;
        //Apply the filter
        let results = sampleData.filter(result => result.id == sample);
        // Access the first result and store it in results filter
        let firstResult = results[0];
        console.log(firstResult);
         // I want to display the results in the bubble chart
         let sample_values = firstResult.sample_values;
         let otu_ids = firstResult.otu_ids;
         let otu_labels = firstResult.otu_labels;
         console.log(sample_values, otu_ids, otu_labels);
         
 
         // Bubble Chart's trace
        let bubble_chart_trace = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: 'Earth'
            }
        };

        let layout = {
            title: { 
                text: '<b>Bacteria Count for each Sample IDd</b>',
            font: {size: 16, color: 'black'}
            },
            hovermode: 'closest',
            paper_bgcolor: "lavender",
            xaxis:{title: 'OTU ID'},
            yaxis:{title: 'Number of Bacteria'},
        };
        //Call Plotly
        Plotly.newPlot('bubble', [bubble_chart_trace], layout)

    });
};

// Build the demographic panel
function Metadata(sample){

    //Using D3 to access the sample data and populate the demographic
    d3.json(URL).then((data) => {

        // Get the demographic information (i.e. metadata) using D3
        let demographic_information = data.metadata;
        //Filter
        let results = demographic_information.filter(id => id.id == sample);
        // Access the first result and store it in results filter
        let first_result = results[0];
        console.log(first_result);
        //Clear out metadata
        d3.select('#sample-metadata').html('');
        //Use Object.entries to add each key and value to the panel
        Object.entries(first_result).forEach(([key,value]) => {
            console.log(key,value);
            //Select the demographic info html
            d3.select('#sample-metadata').append('h6').text(`${key},${value}`);
        });
    });
}

// Define the function when the dropdown detects a change
function optionChanged(results){
    console.log(results);
    BarChart(results);
    BubbleChart(results);
    Metadata(results);
    GaugeChart(results);
}


init();