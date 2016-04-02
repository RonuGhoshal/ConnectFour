$(document).ready(function() {
  $( 'button' ).on('')
  var open_cell = find_open_cell(column1);
  change_cell_color(open_cell);

})

var find_open_cell = function(column) {
  string = column.split(' ')[0].toString();
  var cells_in_column = $( '#' + column + ' li div' );
  for (i = 5; i>=0; i--) {
    if ($(cells_in_column[i]).attr("class").includes("nopiece")) {
      return $(cells_in_column[i]).id;
    }
  }
  return "all cells full";
};

var change_cell_color = function(cell) {
  cell.removeClass("nopiece");
  if (current_player == "red") {
    cell.addClass("redpiece");
  }

  else if (current player == "black") {
    cell.addClass("blackpiece");
  };

var checkForWin = function(cell) {

}

var checkVertical = function(cell){

}
};
