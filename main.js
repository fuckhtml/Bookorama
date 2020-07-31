"use strict";

!function(){

  var app = document.querySelector("#app")

  var range = document.querySelector("#input-color-range");

  var inputColorRed = document.querySelector("#input-color-red");
  var inputColorGreen = document.querySelector("#input-color-green");
  var inputColorBlue = document.querySelector("#input-color-blue");

  var fieldColorRed = document.querySelector("#field-color-red");
  var fieldColorGreen = document.querySelector("#field-color-green");
  var fieldColorBlue = document.querySelector("#field-color-blue");  

  fieldColorRed.innerHTML = 0;
  fieldColorGreen.innerHTML = 0;
  fieldColorBlue.innerHTML = 0;

  var changeColorRed = function(value) {
    fieldColorRed.innerHTML = value;
  }
  var changeColorGreen = function(value) {
    fieldColorGreen.innerHTML = value;
  }
  var changeColorBlue = function(value) {
    fieldColorBlue.innerHTML = value;
  }

  var rangeOnChange = function(callback) {
    callback(range.value);
  }

  range.addEventListener("change", function() {
    if (inputColorRed.checked) {
      rangeOnChange(changeColorRed);
    } else if (inputColorGreen.checked) {
      rangeOnChange(changeColorGreen);
    } else if (inputColorBlue.checked) {
      rangeOnChange(changeColorBlue)
    }
  });

}();