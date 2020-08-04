var pageCounter = 1;
var btn = document.querySelector("#load-data");
var animalDataContainer = document.querySelector("#animal-data");

btn.addEventListener("click", function(){
  var request = new XMLHttpRequest();

  var src = 
    "https://learnwebcode.github.io/json-example/animals-" +
    pageCounter + 
    ".json";

  request.open('GET', src);

  request.onload = function() {
    var data = JSON.parse(request.responseText);
    renderData(data);
  }

  request.send();

  pageCounter++;
  if (pageCounter > 3) {
    btn.setAttribute("disabled", "disabled");
  }

});

function renderData(data) {
  var htmlString = "";
  console.log(data.length);

  for (var i = 0; i < data.length; i++) {
    htmlString = "<p>";
    htmlString += data[i].name + " is a " + data[i].species + ". ";
    
    htmlString += "The food it likes: ";
    for (var j = 0; j < data[i].foods.likes.length; j++) {
      htmlString += data[i].foods.likes[j];
      if (j < data[i].foods.likes.length - 1) {
        htmlString += ", ";
      } else {
        htmlString += "; ";
      }
    }

    htmlString += "and dislikes: ";
    for (var k = 0; k < data[i].foods.dislikes.length; k++) {
      htmlString += data[i].foods.dislikes[k];
      if (k < data[i].foods.dislikes.length - 1) {
        htmlString += ", ";
      } else {
        htmlString += ". ";
      }
    }

    htmlString += "</p>";

    animalDataContainer.insertAdjacentHTML('beforeend', htmlString);
  }

}