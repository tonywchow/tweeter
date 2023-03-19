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
});
