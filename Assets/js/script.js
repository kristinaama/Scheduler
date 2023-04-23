var eventsData;

$(function () {

// run the setHourColors function and loadStoredData function
  setHourColors();
  loadStoredData();

// add code to display the current date in the header of the page.
  var currentTime = dayjs();
  $('#currentDay').text(currentTime.format('[Today is] dddd, MMM D, YYYY'));

// the setHourColors function will apply the past, present, or future class to each time block
// it will compare the id to the current hour
  function setHourColors() {
    var currentTime = dayjs();
    for (var i = 0; i < 24; i++) {
      if (i<currentTime.hour()) {
        $("#hour" + i + " textarea").addClass("past");
      } else if (i==currentTime.hour()) {
        $("#hour"+ i + " textarea").addClass("present");
      }
      else if (i>currentTime.hour()) {
        $('#hour' + i + ' textarea').addClass('future');
      }
    }
  }

// the loadStoredData function will get any user input that was saved in localStorage
function loadStoredData() {
  eventsData = JSON.parse(localStorage.getItem("calenderEvents"));
  if (!eventsData) {
  eventsData = {
      hour9: "",
      hour10: "",
      hour11: "",
      hour12: "",
      hour13: "",
      hour14: "",
      hour15: "",
      hour16: "",
      hour17: ""
      }
    }

// display the values in the localStorage onto the HTML
    $("#hour9 .description").text(eventsData.hour9);
    $("#hour10 .description").text(eventsData.hour10);
    $("#hour11 .description").text(eventsData.hour11);
    $("#hour12 .description").text(eventsData.hour12);
    $("#hour13 .description").text(eventsData.hour13);
    $("#hour14 .description").text(eventsData.hour14);
    $("#hour15 .description").text(eventsData.hour15);
    $("#hour16 .description").text(eventsData.hour16);
    $("#hour17 .description").text(eventsData.hour17);    
  }

// load existing data from local storage
function handleSaveClick(event) {

// global variables for the handleSaveClick function
  var hrNine = document.querySelector('#hour9 .description');
  var hrNineVal = hrNine.value;
  var hrTen = document.querySelector('#hour10 .description');
  var hrTenVal = hrTen.value;
  var hrElvn = document.querySelector('#hour11 .description');
  var hrElvnVal = hrElvn.value;
  var hrTwlv = document.querySelector('#hour12 .description');
  var hrTwlvVal = hrTwlv.value;
  var hrThrtn = document.querySelector('#hour13 .description');
  var hrThrtnVal = hrThrtn.value;
  var hrFourtn = document.querySelector('#hour14 .description');
  var hrFourtnVal = hrFourtn.value;
  var hrFiftn = document.querySelector('#hour15 .description');
  var hrFiftnVal = hrFiftn.value;
  var hrSixtn = document.querySelector('#hour16 .description');
  var hrSixtnVal = hrSixtn.value;
  var hrSeventn = document.querySelector('#hour17 .description');
  var hrSeventnVal = hrSeventn.value;
  
// identify any new changes saved into localStorage
  eventsData = {
    hour9: hrNineVal,
    hour10: hrTenVal,
    hour11: hrElvnVal,
    hour12: hrTwlvVal,
    hour13: hrThrtnVal,
    hour14: hrFourtnVal,
    hour15: hrFiftnVal,
    hour16: hrSixtnVal,
    hour17: hrSeventnVal
    }

// set the new saved events into localStorage
localStorage.setItem("calenderEvents", JSON.stringify(eventsData));
}

// Add listener for click event on any Save button
$('.saveBtn').on('click', handleSaveClick);
handleSaveClick.preventDefault();
});