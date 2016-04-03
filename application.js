$(document).ready(function() {
  $( 'button' ).on('')
  var open_cell = find_open_cell(column);
  change_cell_color(open_cell);
  checkForWin(open_cell);

})

var find_open_cell = function(column) {
  string = column.split(' ')[0].toString();
  var cells_in_column = $( '#' + column + ' li div' );
  for (i = 5; i>=0; i--) {
    if ($(cells_in_column[i]).attr("class").includes("nopiece")) {
      return $(cells_in_column[i]);
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

var checkForWin(cell) {
  if (checkVertical(cell) == true) {
    alert "CONNECT FOUR! You win";
  }
  else if (checkHorizontal(cell) == true) {
    alert "CONNECT FOUR! You win";
  }
  else if (checkDiag1(cell) == true) {
    alert "CONNECT FOUR! You win";
  }
  else if (checkDiag2(cell) == true) {
    alert "CONNECT FOUR! You win";
  }
};


var checkVertical = function(cell){
  var current_column = $(cell).attr("class").split(' ')[0];
  var cells_in_column = $( '#' + current_column + ' li div' );
  var pieces_array = []
  for (i=0; i<6; i++) {
    pieces_array.push($(cells_in_column[i]).attr("class").split(' ')[3]);
  }
  for (i=0; i<4; i++) {
    if (pieces_array[i] != "nopiece") {
      if (pieces_array[i] == pieces_array[i + 1] && pieces_array[i] == pieces_array[i + 2] && pieces_array[i] == pieces_array[i + 3]) {
        return true;
      };
    };
  };
};

var checkHorizontal = function(cell) {
  var current_row = $(cell).attr("class").split(' ')[1];
  var cells_in_row = $( 'ul li .' + current_row);
  var pieces_array = []
  for (i=0; i<6; i++) {
    pieces_array.push($(cells_in_row[i]).attr("class").split(' ')[3];
      }
  for (i=0; i<4; i++) {
    if (pieces_array[i] != "nopiece") {
      if (pieces_array[i] == pieces_array[i + 1] && pieces_array[i] == pieces_array[i + 2] && pieces_array[i] == pieces_array[i + 3]) {
        return true;
      };
    };
  };
};

var checkDiag1 = function(cell) {
  var current_column = $(cell).attr("class").split(' ')[0];
  var current_row = $(cell).attr("class").split(' ')[1];
  var column_num = Number(current_column.replace("column", ""));
  var row_num = Number(current_row.replace("row", ""));
  var pieces_array = []
  for(i=0, i < (6-row_num), i++){
    pieces_array.push($('ul li .column' + (column_num +i).toString() + ".row" +(row_num +i)).attr("class").split('')[3])
  }
  for(i=0, i > (6-row_num), i--){
    pieces_array.unshift($('ul li .column' + (column_num +i).toString() + ".row" +(row_num +i)).attr("class").split('')[3])
  }
  for (i=0; i<4; i++) {
    if (pieces_array[i] != "nopiece") {
      if (pieces_array[i] == pieces_array[i + 1] && pieces_array[i] == pieces_array[i + 2] && pieces_array[i] == pieces_array[i + 3]) {
        return true;
      };
};

var checkDiag2 = function(cell) {
  var current_column = $(cell).attr("class").split(' ')[0];
  var current_row = $(cell).attr("class").split(' ')[1];
  var column_num = Number(current_column.replace("column", ""));
  var row_num = Number(current_row.replace("row", ""));
  var pieces_array = []
  for(i=0, i < (6-row_num), i++){
    pieces_array.unshift($('ul li .column' + (column_num -i).toString() + ".row" +(row_num +i)).attr("class").split('')[3])
  }
  for(i=0, i > (6-row_num), i--){
    pieces_array.push($('ul li .column' + (column_num +i).toString() + ".row" +(row_num -i)).attr("class").split('')[3])
  }
  for (i=0; i<4; i++) {
    if (pieces_array[i] != "nopiece") {
      if (pieces_array[i] == pieces_array[i + 1] && pieces_array[i] == pieces_array[i + 2] && pieces_array[i] == pieces_array[i + 3]) {
        return true;
      };
};

