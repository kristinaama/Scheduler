var eventsData;
//var description = document.querySelector(".description");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  setHourColors();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // TODO: Add code to display the current date in the header of the page.
  var currentTime = dayjs();
  $('#currentDay').text(currentTime.format('[Today is] dddd, MMM D, YYYY'));

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

//TODO load existing data from local storage
function handleSaveClick(event) {
  //grab data from HTML
  var hourBlock = $(event.target).parent();
  // var value = hourBlock.siblings("textarea").val();
  // var hour = hourBlock.attr('id');
  // var hour = hourBlock.attr('id').replace('hour-','');
  // eventsData["hour"+hour] = value;

  //TODO store this hour's data in local storage
  //localStorage.setItem("calenderEvents", JSON.stringify(eventsData));
  //localStorage.setItem(hour, value);
//}

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

localStorage.setItem("calenderEvents", JSON.stringify(eventsData));
}

$('.saveBtn').on('click', handleSaveClick);
loadStoredData();
handleSaveClick.preventDefault();
});