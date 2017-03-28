
$(document).ready(function() {

  var newArray = [];
  var vowels = ["a", "e", "i", "o", "u"];

  $("#submit-button").click(function(event) {
    event.preventDefault();
    var stringArray = $("input").val().split("");
    var charReplace = "";
    // for(var index = 0; index <stringArray; index++){
    //
    // }
    stringArray.forEach(function(letter) {
      var foundVowell = false;
      vowels.forEach(function(vowel) {      
        if (letter === vowel) {
          foundVowell = true;
        }
      });
      if(foundVowell){
        newArray.push("-");
      }
      else{
        newArray.push(letter);
      }

    });
    console.log(newArray);
  });

});


// for (i=0; i < 4; i++) {
//   if (letter = vowel) {
//     newArray.push("-");
//     break;
//   } else {
//     newArray.push(letter);
//     break;
//   }
// }
