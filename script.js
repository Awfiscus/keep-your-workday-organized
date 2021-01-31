//When the user writes something in the input field, the data is saved to local storage when the save button is clicked
//When the time block is passed then the block turns gray
//When the time is on the current hour the time block is red
//When the time is future the time block is green
var timeBlocks = ["9am", "10am", "11am", "12pm"]
var taskBarInput = []
//first thing get from local storage
//if something in there, put it in appropriate textarea
var currentTime = moment().format("HH:mm")

console.log(currentTime);
//Functions:

function fillData(input) {
    for(var i = 0; i < input.length; i++) {
        taskBarInput.push(input[i].value)
    }
    // saveLocale()
}


//Need a function to equate if a time block value is equal to current time then determine its color

function checkTime {
    if()
}

//moment().format(LT) is current time in form of 3:26 PM

//Need a function for storing input value into local storage

//Event Listeners:

//Need an event listener for save buttons to kick off function for storing input data into local storage
var saveBtn = $(".saveBtn")

saveBtn.click(function() {
  var btn = $(this)
  var row = btn.parent()
  var input = row.children("input")
  console.log(input.val());
  fillData($("input").toArray())
})

saveBtn.click(function saveLocale() {
for(var i = 0; i < timeBlocks.length; i++) {
    localStorage.setItem(timeBlocks[i], JSON.stringify(taskBarInput[i]))
    }
    console.log();
})

$(window).on("load", function (input) {
    var savedInputs = $("input").toArray()
    for (var i = 0; i < timeBlocks.length; i ++) {
       var saveData = JSON.parse(localStorage.getItem(timeBlocks[i]))
        console.log(saveData);
        // savedInputs.push(input[i])
        console.log(savedInputs);
        $(savedInputs[i]).val(saveData)
        console.log(savedInputs);
    } 
}) 


//save to local storage
console.log(taskBarInput[0]);