var tableData = data;

var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");
var newText = "";

var tbody = d3.select("tbody");

tableData.forEach((ufo_data) => {
    //console.log(ufo_data); Test code
    var row = tbody.append("tr");
    Object.entries(ufo_data).forEach(([k,v]) => {
        //console.log(k,v) Test code
        var cell = row.append("td");
        cell.text(v);
    });
});

inputField.on("change", function() {
    newText = d3.event.target.value;
    console.log(newText);
});

function handleClick() {
    //console.log("A button was clicked!"); Test code
    //console.log(d3.event.target);

    d3.event.preventDefault();

    tbody.selectAll("*").remove();

    if (newText === "") {
        tableData.forEach((ufo_data) => {
            //console.log(ufo_data); Test code
            var row = tbody.append("tr");
            Object.entries(ufo_data).forEach(([k,v]) => {
                //console.log(k,v) Test code
                var cell = row.append("td");
                cell.text(v);
            });
        });
    }
    else {
        tableData.forEach((ufo_data) => {
            //console.log(ufo_data); Test code
            var dateTimeArray = Object.entries(ufo_data)[0];
            if (dateTimeArray[1] === newText) { 
                var row = tbody.append("tr");
                Object.entries(ufo_data).forEach(([k,v]) => {
                    //console.log(k,v) Test code
                    var cell = row.append("td");
                    cell.text(v);
                });
            }
        });
    }
};

button.on("click", handleClick);


