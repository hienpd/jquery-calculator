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

var pressButton = function() {

    // Guard statement
    if ($screen.text() === 'Error') {
        return;

    } else {
        // Add event listeners to all span tags
        var $buttons = $('span');
        $buttons.click(function(event) {
          if ($(event.target).text() === 'C') {
            return $screen.text('');
          }
          var $addToScreen = $(event.target).text();
          $screen.append($addToScreen);

        });
    }
};

pressButton();
