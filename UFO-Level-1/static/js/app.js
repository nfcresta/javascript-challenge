// from data.js
var tableData = data;

// select table variable
var tbody = d3.select("tbody");

// append data to the table
tableData.forEach(ufoData => {
    console.log(ufoData);

    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


