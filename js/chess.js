(function () {
  setUp = function() {
    var x, y, col, row, flip;
    col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    row = [1, 2, 4, 4, 5, 6, 7, 8].reverse();
    flip = false;
    for (x in col) {
      var $row = $('<div>');
      for (y in row) {
        $span = $('<span>').html('&nbsp;');
        $span.data('loc', col[x] + row[y]);
        $span.addClass((flip ? ' grey' : 'black'));
        $row.append($span);
        flip = !flip;
      }
      $('#board').append($row);
      flip = !flip;
    }
  }();
})();
