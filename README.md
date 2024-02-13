# belly-button-challenge

## Background

In this assignment, I built an interactive dashboard to explore the *[Belly Button Biodiversity dataset](https://robdunnlab.com/projects/belly-button-biodiversity/)*, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

![belly button](https://robdunnlab.com/wp-content/uploads/940.jpg)

## Horizontal Bar Chart

I used the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

I created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

I used `sample_values` as the values for the bar chart.

I used `otu_ids` as the labels for the bar chart.

I used `otu_labels` as the hovertext for the chart.

![bar chart](https://github.com/Amarilli/belly-button-challenge/blob/main/Images/barchart.png)

## Bubble Chart

I created a bubble chart that displays each sample.

I used `otu_ids` for the x values.

I used `sample_values` for the y values.

I used `sample_values` for the marker size.

I used `otu_ids` for the marker colors.

I used `otu_labels` for the text values.

I displayed the sample metadata, i.e., an individual's demographic information.

![demographic](https://github.com/Amarilli/belly-button-challenge/blob/main/Images/demographic.png)

I displayed each key-value pair from the metadata JSON object somewhere on the page.

I updated all the plots when a new sample is selected. Additionally, I created a layout for the dashboard. 

![bubble](https://github.com/Amarilli/belly-button-challenge/blob/main/Images/bubblechart.png)


I deployed my app to a free static page hosting service, such as [GitHub Pages](https://amarilli.github.io/belly-button-challenge/)


## Advanced Challenge Assignment (Optional with no extra points earning)
The following task is advanced and therefore optional.

I adapted the Gauge Chart from [Plotly](https://plot.ly/javascript/gauge-charts) to plot the weekly washing frequency of the individual.

I modified the example gauge code to account for values ranging from 0 through 9.

I updated the chart in case a new sample is selected.

![gauge](https://github.com/Amarilli/belly-button-challenge/blob/main/Images/gauge_chart.png)

## References 

Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.

Background image: <a href="http://www.freepik.com">Designed by Freepik</a>

