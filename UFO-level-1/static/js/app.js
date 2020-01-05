// Assign the data from `data.js` to a descriptive variable
var tableData = data;

function refreshPage(){
    location.reload();
}

function capitalizeFLetter() { 
    var input = document.getElementById("input"); 
    var x = document.getElementById("div"); 
    var string = input.value; 
    x.innerHTML = string[0].toUpperCase() +  
      string.slice(1); 
} 

var tbody = d3.select("tbody");  // Get a reference to the table body

data.forEach(function(ufoReport) { //Loop thru data & console.log each ufo report object
    console.log(ufoReport);

    var row = tbody.append("tr"); //Use d3 to append one table row `tr` for each UFO report object

    Object.entries(ufoReport).forEach(function([key, value]) { //Use `Object.entries` to console.log each ufo report value
      console.log(key, value);
      // Use d3 to append 1 cell per ufo report value (date, city, state, etc)
      // Append a cell to the row for each value in the ufo report object
      var cell = row.append("td");
      // Step 5: Use d3 to update each cell's text with ufo report values (date, city, state, etc)
      cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");


// Filter data when button is pressed
button.on("click", function() {

    // Clear the table
    var table = document.getElementById("ufo-table");
    for(var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);
    

    filteredData.forEach(function(ufoReport) { 
        console.log(ufoReport);
        var row = tbody.append("tr");

        Object.entries(ufoReport).forEach(function([key, value]) { 
            console.log(key, value);

            var cell = row.append("td");

            cell.text(value);
        });
    });
});
