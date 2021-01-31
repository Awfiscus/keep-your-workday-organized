



var timeBlocks = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var taskBarInput = []
var saveBtn = $(".saveBtn")
var resetBtn = $(".resetBtn")
var currentDay = moment()
var currentTime = moment().format("HH:mm")
var timeId = []
var displayDay = $("#currentDay")

displayDay.text(currentDay)


function fillData(input) {
    for(var i = 0; i < input.length; i++) {
        taskBarInput.push(input[i].value)
    }
    // saveLocale()
}

function idFinder(div) {
    for(var i = 0; i < div.length; i++) {
        timeId.push(div[i])
    }
}

//Need a function to equate if a time block value is equal to current time then determine its color
function applyTimeColors() {
    for(var i = 0; i < timeId.length; i++) {
    if($(timeId[i]).attr("id") === parseInt(currentTime)) {
        $(timeId[i]).addClass("present")
    } else if($(timeId[i]).attr("id") < parseInt(currentTime)) {
        $(timeId[i]).addClass("past")
    } else if($(timeId[i]).attr("id") > parseInt(currentTime)) {
        $(timeId[i]),addClass("future")
    } console.log(timeId);
}}

console.log(parseInt(currentTime));
console.log(timeId[1]);



//moment().format(LT) is current time in form of 3:26 PM

//Need a function for storing input value into local storage

//Event Listeners:

//Need an event listener for save buttons to kick off function for storing input data into local storage
var saveBtn = $(".saveBtn")

saveBtn.click(function() {
  var btn = $(this)
  var row = btn.parent()
  fillData($("input").toArray())
})

saveBtn.click(function saveLocale() {
for(var i = 0; i < timeBlocks.length; i++) {
    localStorage.setItem(timeBlocks[i], JSON.stringify(taskBarInput[i]))
    }
    console.log();
})

resetBtn.click(function resetSchedule() {
    localStorage.clear()
})



$(window).on("load", function (input) {
    var savedInputs = $("input").toArray()
    for (var i = 0; i < timeBlocks.length; i ++) {
       var saveData = JSON.parse(localStorage.getItem(timeBlocks[i]))
        $(savedInputs[i]).val(saveData)
    } 
    idFinder($("div").toArray())
    applyTimeColors()  
}) 


