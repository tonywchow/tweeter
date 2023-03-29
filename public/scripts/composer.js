/*
Strech exercise: This function is for the scroll to top of page. When there is a vertical scroll of greater than 100 pixels, the function will activate the CSS to show the scroll to top arrow.
*/

$(document).ready(function () {
  const toTop = document.querySelector(".to-top");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  });

  function tweetDown() {
    $(".to-top").click(function () {
      $(".new-tweet").slideDown();
      $(".new-tweet").css("display", "flex");
    });
  }
  tweetDown();
});
