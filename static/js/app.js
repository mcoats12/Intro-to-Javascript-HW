// from data.js
var tableData = data;

//YOUR CODE HERE!
var tbody = d3.select("tbody");

var table = d3.select("table");

table.attr("class", "table table-striped");

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {
    
    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var dateinputElement = d3.select("#datetime");
    var cityinputElement = d3.select("#city")
    var stateinputElement = d3.select("#state")
    var countryinputElement = d3.select("#country")
    var shapeinputElement = d3.select("#shape")
    
    // Get the property of the input element
    var dateinputValue = dateinputElement.property("value");
    var cityinputValue = cityinputElement.property("value");
    var stateinputValue = stateinputElement.property("value");
    var countryinputValue = countryinputElement.property("value");
    var shapeinputValue = shapeinputElement.property("value");

// Filter for desired data
    var ufoData = tableData

    if (dateinputValue.length > 0) {
    var ufoData = ufoData.filter(filtered => filtered.datetime === dateinputValue);
    }
    if (cityinputValue.length > 0) {
        var ufoData = ufoData.filter(filtered => filtered.city === cityinputValue);   
    }
    if (stateinputValue.length > 0) {
        var ufoData = ufoData.filter(filtered => filtered.state === stateinputValue);   
    }
    if (countryinputValue.length > 0) {
        var ufoData = ufoData.filter(filtered => filtered.country === countryinputValue);   
    }
    if (shapeinputValue.length > 0) {
        var ufoData = ufoData.filter(filtered => filtered.shape === shapeinputValue);   
    }

    // Loop through filtered array to build new filtered table
    var filteredData = ufoData
    filteredData.forEach(x => {
         var row = tbody.append("tr");

        row.append("td").text(x.datetime);
        row.append("td").text(x.city);
        row.append("td").text(x.state);
        row.append("td").text(x.country);
        row.append("td").text(x.shape);
        row.append("td").text(x.durationMinutes);
        row.append("td").text(x.comments);
    })
    
});