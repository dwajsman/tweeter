$(document).ready(function() {

  // $('textarea').click(function() {
  //   console.log("clicky click");
  //   alert("The paragraph was clicked.");
  // });

  $('textarea').keyup(function() {
    let textLenght = $('textarea').val().length;
    // console.log(textLenght);
    let remainingChar = 140 - textLenght;
    $('output').text(remainingChar);
    if (remainingChar <= 0) {
      $('output').addClass('red');
    }
    if (remainingChar > 0) {
      $('output').removeClass('red');
    }

  });

  console.log("running?");

});


