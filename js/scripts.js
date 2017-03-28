var stringArray = [];
var addItem = function(item) {
  stringArray.push(item);
};

$(document).ready(function() {

  $("#submit-button").click(function(event){
    event.preventDefault();
    var userInput = $("input").val().split("");
    addItem(userInput);
    alert(stringArray);
  });





});
