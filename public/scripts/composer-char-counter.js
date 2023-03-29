/*
This is the character counter for tweeter. To ensure the user does not type more than 140 characters. If so, it will change the CSS color font of the count ter to red
*/
$(document).ready(function () {
  // --- our code goes here ---
  $("#tweet-text").on("input", function () {
    let textBoxLength = $(this).val().length;
    $(".counter").val(140 - textBoxLength);

    let charLimit = 140 - textBoxLength;
    if (charLimit < 0) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "#545149");
    }
  });
});
