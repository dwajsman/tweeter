/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {



  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
  };

  function createTweetElement(data) {
    let name = data["user"]["name"];
    let avatars = data["user"]["avatars"];
    let handle = data["user"]["handle"];
    let text = data["content"]["text"];
    let time = timeago.format(data["created_at"]);
        
    console.log(name, avatars, text); 

    let myTweet = `<article class="tweet">
        <header>
          <div class="user">
            <img src="${avatars}" alt="${name}'s avatar">
            <h2 class="user-name">${name}</h2>
          </div>
          <h3 class="user-handle">${handle}</h3>
        </header>
        <p>${text}</p>
        <footer>
        <h5 class="publish-date">${time}</h5>
        <ul>
          <li><i class="fas fa-flag"></i></li>
          <li><i class="fas fa-retweet"></i></li>
          <li><i class="fas fa-heart"></i></li>
        </ul>
      </footer>
      </article>`

      return myTweet
  }

  const $tweet = createTweetElement(tweetData);



  // const $tweet = tweetData;

  // Test / driver code (temporary)
  //console.log($tweet); // to see what it looks like
  // $("article").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.









  $("button").on("click", function() {
    // alert("hello!");
    //  let myName = $tweet["user"]["name"];
    // $(".tweet-posts").prepend(myName);
    // console.log("button pressed!");
     $("#tweet-posts").prepend($tweet);
  });


});
