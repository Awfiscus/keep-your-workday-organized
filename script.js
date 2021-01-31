


//Declared Global Variables
var timeBlocks = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var taskBarInput = []
var saveBtn = $(".saveBtn")
var resetBtn = $(".resetBtn")
var currentDay = moment()
var currentTime = moment().format("HH:mm")
var timeId = []
var displayDay = $("#currentDay")

//displays the time and day at the top of the page
displayDay.text(currentDay)

//this function pushes the values from the input bars into an array
function fillData(input) {
    for(var i = 0; i < input.length; i++) {
        taskBarInput.push(input[i].value)
    }
}

//this function allows the divs to be put into a array for use in the applyTimeColors function
function idFinder(div) {
    for(var i = 0; i < div.length; i++) {
        timeId.push(div[i])
    }
}

//based on if/else if statements the for loop goes through the div array one by one checking the ids to see if they match the critera
function applyTimeColors() {
    for(var i = 0; i < timeId.length; i++) {
    if($(timeId[i]).attr("id") == parseInt(currentTime)) {
        $(timeId[i]).addClass("present")
    } else if($(timeId[i]).attr("id") < parseInt(currentTime)) {
        $(timeId[i]).addClass("past")
    } else if($(timeId[i]).attr("id") > parseInt(currentTime)) {
        $(timeId[i]).addClass("future")
    } console.log(timeId);
}}

//click button to start the save functions
saveBtn.click(function() {
  var btn = $(this)
  var row = btn.parent()
  fillData($("input").toArray())
})


//on save click saves the input data to locale storage.
saveBtn.click(function saveLocale() {
for(var i = 0; i < timeBlocks.length; i++) {
    localStorage.setItem(timeBlocks[i], JSON.stringify(taskBarInput[i]))
    }
})

//simple reset button allows for the clearing of locale storage to be able to refresh the page
resetBtn.click(function resetSchedule() {
    localStorage.clear()
})


//when the window loads the data from local storage is put into the input values that they came out of. Then it runs the functions to set up the time colors based on the current time of the page opening.
$(window).on("load", function (input) {
    var savedInputs = $("input").toArray()
    for (var i = 0; i < timeBlocks.length; i ++) {
       var saveData = JSON.parse(localStorage.getItem(timeBlocks[i]))
        $(savedInputs[i]).val(saveData)
    } 
    idFinder($("div").toArray())
    applyTimeColors()  
}) 


