//When the user writes something in the input field, the data is saved to local storage when the save button is clicked
//When the time block is passed then the block turns gray
//When the time is on the current hour the time block is red
//When the time is future the time block is green

//first thing get from local storage
//if something in there, put it in appropriate textarea
var text = localStorage.getItem("9am")
console.log(text);
//Functions:

//Need a function to equate if a time block value is equal to current time then determine its color

//moment().format(LT) is current time in form of 3:26 PM

//Need a function for storing input value into local storage

//Event Listeners:

//Need an event listener for save buttons to kick off function for storing input data into local storage
var saveBtn = $(".saveBtn")

saveBtn.click(function() {
  var btn = $(this)
  var row = btn.parent()
  var textarea = row.children("texarea")
  console.log(bt.parent().children());  
})

//save to local storage