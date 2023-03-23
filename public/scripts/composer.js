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
