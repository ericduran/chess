
var chess = chess || {};

/**
 * Set up the board.
 */
chess.setUpBoard = function() {
  var x, y, col, row, flip;
  col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  row = [1, 2, 4, 4, 5, 6, 7, 8].reverse();
  flip = false;
  for (x in col) {
    var $row = $('<div>');
    for (y in row) {
      $span = $('<span>').html('&nbsp;');
      $span.attr('id', col[x] + row[y]);
      $span.addClass((flip ? ' grey' : 'black'));
      $row.append($span);
      flip = !flip;
    }
    $('#board').append($row);
    flip = !flip;
  }
}();

/**
 * set up the chess peices in the board.
 * might just move this to the initial board setup.
 */
chess.setUpPieces = function () {
}

/**
 * Trying to figure out what a valid move is.
 * Return true, if allowed, false otherwise.
 */
chess.move = function (peice, currentLocation, requestedLocation) {
  if (isAvalable(requestedLocation)) {
    // Figure out if the move is valid for this chess peice.
  }
  return false;
}

/**
 * return wheter a location is avaiable for the current selected piece.
 */
chess.isAvalable = function(location) {
  // Not sure what I want to use to represent available, data-available=yes:no ?
  return false;
}

/**
 * return the selected board location and chess peices currently selected if any.
 */
chess.selectedPiece = function() {
}
