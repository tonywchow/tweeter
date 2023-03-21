/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const tweetData = {
//   user: {
//     name: "Newton",
//     avatars: "https://i.imgur.com/73hZDYK.png",
//     handle: "@SirIsaac",
//   },
//   content: {
//     text: "If I have seen further it is by standing on the shoulders of giants",
//   },
//   created_at: 1461116232227,
// };

// const data = [
//   {
//     user: {
//       name: "Newton",
//       avatars: "https://i.imgur.com/73hZDYK.png",
//       handle: "@SirIsaac",
//     },
//     content: {
//       text: "If I have seen further it is by standing on the shoulders of giants",
//     },
//     created_at: 1461116232227,
//   },
//   {
//     user: {
//       name: "Descartes",
//       avatars: "https://i.imgur.com/nlhLi3I.png",
//       handle: "@rd",
//     },
//     content: {
//       text: "Je pense , donc je suis",
//     },
//     created_at: 1461113959088,
//   },
// ];

$(document).ready(function () {
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

  // NOTE Tweets are only loaded after a new tweet is submitted. Is that correct?
  // NOTE If i have the ajax get request outside the function it will load the tweets.

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
    // TODO Remove the below console.log before submitting project
    console.log("I have been clicked");
    console.log($(this).serialize());
  });

  loadTweets();
});
