$(document).ready(function () {
  // --- our code goes here ---
  $("article.tweet-container").hover(
    function () {
      $(this).css("box-shadow", "4px 4px #D7D9F5");
    },
    function () {
      $(this).css("box-shadow", "none");
    }
  );

  $(".fa-solid fa-flag").hover(
    function () {
      $(this).css("background-color", "#F1E190");
    },
    function () {
      $(this).css("background-color", "init");
    }
  );
});
