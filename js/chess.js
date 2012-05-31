/**
 * Chess.
 */
var chess = {

};

/**
 * Set up the board.
 */
chess.setUpBoard = function() {
  var x, y, col, row, flip;
  col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  row = [1, 2, 4, 4, 5, 6, 7, 8].reverse();
  flip = false;
  for (x in col) {
    var $row = $('<div>').attr('id', x);
    for (y in row) {
      $span = $('<span>').html('&nbsp;');
      $span.attr('id', col[x] + row[y]);
      $span.addClass((flip ? ' light' : 'dark'));
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
  var x, iOrder, rows;
  iOrder = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];

  // TODO: Fix this.
  $dark_row = $('#0 span');
  $dark_pwns = $('#1 span');
  $light_row = $('#7 span');
  $light_pwns = $('#6 span');

  $.each(iOrder, function(i, v) {
    $($dark_row[i]).html($('<img>').attr('src', 'img/' + iOrder[i] + 'd.png').attr('id', iOrder[i] + 'd' + i ));
    $($light_row[i]).html($('<img>').attr('src', 'img/' + iOrder[i] + 'l.png').attr('id', iOrder[i] + 'l' + i));
    $($dark_pwns[i]).html($('<img>').attr('src', 'img/pd.png').attr('id', i + 'pd').attr('draggable', 'true'));
    $($light_pwns[i]).html($('<img>').attr('src', 'img/pl.png').attr('id', i + 'pl').attr('draggable', 'true'));
  });

}();


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
