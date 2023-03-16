$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on("input", function() {
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
