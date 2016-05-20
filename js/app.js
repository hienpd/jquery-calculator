// Click an operand or operator button to append text to the screen
// If the screen displays 'Error', don't append anything

// Click clear button to remove all text from screen

// Click equals button to evaluate arithmetic expression shown on the screen
// If expression is in format operand(+|-|x|/)operand then evaluate the expression and update screen with result
// If expression isn't in correct format or dividing by zero, update screen with Error

// Bonus 1: Don't change the existing HTML
// Bonus 2: Don't use eval() function
// Bonus 3: Allow user to input expressions directly to the screen

var $screen = $('#screen');
var $buttons = $('span');
var divide = $('.operator').eq(1).text();
var multiply = $('.operator').eq(2).text();
var subtract = $('.operator').eq(3).text();
var addition = $('.operator').eq(4).text();
var result = '';

$buttons.click(function(event) {

  if ($(event.target).text() === 'C') {
    return $screen.text('');
  } else if ($(event.target).text() === 'x') {
    return $screen.append('*');
  } else if ($(event.target).text() === '÷') {
    return $screen.append('/');
  } else if ($(event.target).text() === '=') {
      try {
        result = eval($screen.text());
      }
      catch (e) {
        return $screen.text('Error');
      }
    if (result === Infinity || $screen.text().startsWith('/')) {
      return $screen.text('Error');
    }
    return $screen.text(result);
  }

  var $addToScreen = $(event.target).text();
    if ($screen.text() === 'Error') {
      return;
    } else {
      $screen.append($addToScreen);
    }

});
