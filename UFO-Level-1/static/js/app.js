// from data.js
var tableData = data;

// select table variable
var tbody = d3.select("tbody");

tbody.text("");

// append data to the table
tableData.forEach(ufoData => {
    console.log(ufoData);

    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

console.log("===================== Filtered Data =====================")

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column 
// to find rows that match user input.

var form = d3.select("form");
var button = d3.select("#filter-btn");

// event handlers
form.on("submit", runEnter);
button.on("click", runEnter);

// complete event handlers with a function
function runEnter(){
    // clear table so filtered data will show up
    tbody.text("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // select input element
    var inputElement = d3.select("input");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // create a filtered data variable
    var filterSearch = tableData.filter(sighting => sighting.datetime === inputValue);

    // append filtered data to the table
    filterSearch.forEach(filterData => {
        console.log(filterData);
        var row = tbody.append("tr");

        Object.entries(filterData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


// BONUS: UFO-Level 2
var filterButton = d3.select("#filter-btn");


