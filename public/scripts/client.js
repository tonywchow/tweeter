/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  // Stretch exercise: Toggles the tweet form when "Write a new tweet" is clicked
  function tweetToggler() {
    $("#toggle-tweet").click(function () {
      $(".new-tweet").slideToggle();
      $(".new-tweet").css("display", "flex");
    });
  }

  tweetToggler();

  //Create HTML template
  function createTweetElement(tweetData) {
    let $tweet = `
    <article class="tweet-container">
    <header>
    <div class="tweet-name">
    <img src=${tweetData.user.avatars}> 
    <h3>${tweetData.user.name}</h3>
    </div>
    <div class="username">
    <h3>${tweetData.user.handle}</h3>
    </div>
    </header>
    <div class="tweet-message">
    <h4>${escape(tweetData.content.text)}</h4>
    </div>
    <footer class="tweet-container">
    <div class="time-stamp">
    <h5>${timeago.format(tweetData.created_at)}</h5>
    </div>
    <div class="icons">
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
    </div>
    </footer>
    </article>`;

    return $tweet;
  }

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  //loops through tweet database and utilizes createTweetElement function to create HTML template for each tweet in the database.
  function renderTweets(tweetArr) {
    $(".tweets").empty();
    for (const tweet of tweetArr) {
      const $listItem = createTweetElement(tweet);
      $(".tweets").prepend($listItem);
    }
  }
  //AJAX get method to load the tweets in URL /tweets and passes it to the renderTweets function to create an HTML template.
  function loadTweets() {
    $.ajax({
      method: "GET",
      url: "/tweets",
    }).then((tweets) => renderTweets(tweets));
  }
  // On submit, it will catch errors and use AJAX to append the new tweet to the page without refreshing. On successful execution of the AJAX, it will clear the text box and reset the counter.
  $("form").submit(function (event) {
    event.preventDefault();
    let tweetText = $("#tweet-text").val();
    $(".error").css("display", "none");
    $(".error-message").empty();
    if (tweetText.length > 140) {
      let error = "You have more then 140 characters in your tweet";
      $(".error").css("display", "flex");
      $(".error").slideDown();
      $(".error-message").text(error);
    } else if (tweetText.length == 0 || tweetText === null) {
      let error = "Text field is empty, please enter a tweet";
      $(".error").css("display", "flex");
      $(".error").slideDown();
      $(".error-message").text(error);
    } else {
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize(),
        success: () => {
          loadTweets();
          $("#tweet-text").val("");
          $(".counter").val(140);
        },
      });
    }
  });

  // Calling the loadTweets function to load tweets existing in the database
  loadTweets();
});

module.exports();
