/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  user: {
    name: "Newton",
    avatars: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac",
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants",
  },
  created_at: 1461116232227,
};

const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

$(document).ready(function () {
  function createTweetElement(tweetData) {
    let $tweet = `
    <article class="tweet-container">
    <header>
    <div class="tweet-name">
    <img src="/images/profile-hex.png"> 
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
    <h5>${tweetData.created_at}</h5>
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
    for (const tweet of tweetArr) {
      const $listItem = createTweetElement(tweet);
      $(".tweets").append($listItem);
    }
  }

  renderTweets(data);
});

// function timestamp(oldTime) {
//   let datetime = Date.now()
//   let difference = Date.now() - oldTime;

// }
