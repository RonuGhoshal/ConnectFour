$(document).ready(function() {
  $( 'button' ).on('')


})

var find_open_cell = function(column) {
  string = column.split(' ')[0].toString();
  var cells_in_column = $( '.' + column + ' li div' );
  for (i = 5; i>=0; i--) {
    if ($(cells_in_column[i]).attr("class").includes("nopiece")) {
      return $(cells_in_column[i]).id;
    }
  }
  return "all cells full";
};
