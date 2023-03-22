/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
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
    <h4>${tweetData.content.text}</h4>
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

  function renderTweets(tweetArr) {
    $(".tweets").empty();
    for (const tweet of tweetArr) {
      const $listItem = createTweetElement(tweet);
      $(".tweets").prepend($listItem);
    }
  }

  function loadTweets() {
    $.ajax({
      method: "GET",
      url: "/tweets/",
    }).then((tweets) => renderTweets(tweets));
  }

  $("form").submit(function (event) {
    event.preventDefault();
    console.log($("#tweet-text").val().length);
    if ($("#tweet-text").val().length > 140) {
      return alert("You have more then 140 characters in your tweet");
    }

    if ($("#tweet-text").val().length == 0 || $("#tweet-text").val() === null) {
      return alert("Please enter a tweet");
    }

    $.ajax({
      method: "POST",
      url: "/tweets/",
      data: $(this).serialize(),
      success: loadTweets,
    });
  });

  loadTweets();
});
