//get variables set up

var past = $('#past');
var now =  $('#present');
var future =  $('#future');
var day = $('#currentDay');
var save = $('.save-Btn');
var info= $('#textInfo');
var nine =$('#hour-9');
var ten =$('#hour-10');
var elev =$('#hour-11');
var twelv =$('#hour-12');
var thirt =$('#hour-13');
var four =$('#hour-14');
var fift =$('#hour-15');
var sixt =$('#hour-16');
var sevt =$('#hour-17');


var texMes = [];





//setting time stamp
const currentDay = dayjs().format(' YYYY-MM-DDHH: mm:ssZ[Z]');
$("#currentDay").text(currentDay);
console.log(currentDay);

// const currentDay = dayjs().format("dddd, MMMM D, hh:mm:ss");


 
$(function workDay() {
$(save).on("click", function (event) {
  var day = $(info).val().trim();
  localStorage.setItem ("past");
});

$(save).on("click", function (event) {
  var day = $(info).val().trim();
  localStorage.setItem ("now");
});

$(save).on("click", function (event) {
  var day = $(info).val().trim();
  localStorage.setItem ("future");
});


});

workDay();