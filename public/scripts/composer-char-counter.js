$(document).ready(function() {

  $('textarea').keyup(function() {
    // console.log($(this).val().length);
    let textLenght = $(this).val().length;
    let remainingChar = 140 - textLenght;
    let output = $(this).closest('form').find('.counter');
    output.text(remainingChar);


    if (remainingChar <= 0) {
      output.addClass('red');
    }
    if (remainingChar > 0) {
      output.removeClass('red');
    }

  });

 


  // console.log("running?");

});


