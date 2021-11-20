/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(function () {
  // ---- NEW

  // Fake data taken from initial-tweets.json
  const loadTweets = function () {
    $.ajax({
      type: "GET",
      url: "/tweets",
      async: false,
      success: function (text) {
        renderTweets(text);
      }
    });
  };


  const renderTweets = function (tweets) {
    // loops through tweets
    for (let index = 0; index < tweets.length; index++) {
      const tweetObj = tweets[index];
      // calls createTweetElement for each tweet
      let tweetElement = createTweetElement(tweetObj);
      // takes return value and appends it to the tweets container
      $("#tweet-posts").prepend(tweetElement);
    }
  };

  function createTweetElement(data) {
    let name = data["user"]["name"];
    let avatars = data["user"]["avatars"];
    let handle = data["user"]["handle"];
    let text = data["content"]["text"];
    let time = timeago.format(data["created_at"]);


    let myTweet = `<article class="tweet">
        <header>
          <div class="user">
            <img src="${escape(avatars)}" alt="${escape(name)}'s avatar">
            <h2 class="user-name">${escape(name)}</h2>
          </div>
          <h3 class="user-handle">${escape(handle)}</h3>
        </header>
        <p>${escape(text)}</p>
        <footer>
        <h5 class="publish-date">${escape(time)}</h5>
        <ul>
          <li><i class="fas fa-flag"></i></li>
          <li><i class="fas fa-retweet"></i></li>
          <li><i class="fas fa-heart"></i></li>
      </ul>
      </footer>
      </article>`

    return myTweet;
  }
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  $("#form").submit(function (e) {
    e.preventDefault();
    let currentTweet = $("#tweet-text").serialize();


    let tweetLength = currentTweet.length - 5;
    console.log(tweetLength);

    if (tweetLength === 0) {
      $("#alert").slideDown("slow").html("Tweet can't be empty.");
      return;
    } else if (tweetLength > 140) {
      $("#alert").slideDown("slow").html("Your tweet exeeds 140 characters.");
      return;

    }


    $.post("/tweets", currentTweet, () => {
      $("#alert").slideUp("slow");
      loadTweets();
      console.log("Success");
    });


  });



  loadTweets();
});