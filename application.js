$(document).ready(function() {
  turn = 1
  columnSelector();
})

var columnSelector = function(){
  $(".standardcolumn").on("click", function(event){
    event.preventDefault();
    var column_id = this.id;
    var open_cell = find_open_cell(column_id);
    if (open_cell) {
      change_cell_color(open_cell);
      checkForWin(open_cell);
    };
  });
};

var find_open_cell = function(column) {
  string = column.split(' ')[0].toString();
  var cells_in_column = $( '#' + column + ' li div' );
  for (i = 5; i>=0; i--) {
    if ($(cells_in_column[i]).attr("class").includes("nopiece")) {
      return $(cells_in_column[i]);
    }
  }
  alert("This column is full! Try a different column.");
  return false;
};

var change_cell_color = function(cell) {
  cell.removeClass("nopiece");
  if (turn % 2 == 0) {
    cell.addClass("redpiece");
  }
  else {
    cell.addClass("blackpiece");
  }
  turn++
};

var checkForWin = function(cell) {
  var solved = false;
  if (checkVertical(cell) == true) {
    solved = true;
  }
  else if (checkHorizontal(cell) == true) {
    solved = true;
  }
  else if (checkDiag1(cell) == true) {
    solved = true;
  }
  else if (checkDiag2(cell) == true) {
    solved = true;
  }
  if (solved == true) {
    alert("CONNECT FOUR! YOU WIN!");
    $( '.standardcell.blackpiece' ).removeClass('blackpiece');
    $( '.standardcell.redpiece' ).removeClass('redpiece');
    $( '.standardcell' ).addClass('nopiece');
  }
};

var checkPieces = function(pieces_array) {
  for (i=0; i<4; i++) {
    if (pieces_array[i] != "nopiece" && (pieces_array.length >= 4)) {
      if (pieces_array[i] == pieces_array[i + 1] && pieces_array[i] == pieces_array[i + 2] && pieces_array[i] == pieces_array[i + 3]) {
        return true;
      };
    };
  };
};

var checkVertical = function(cell){
  var current_column = $(cell).attr("class").split(' ')[0];
  var cells_in_column = $( '#' + current_column + ' li div' );
  var pieces_array = []
  for (i=0; i<6; i++) {
    pieces_array.push($(cells_in_column[i]).attr("class").split(' ')[3]);
  };
  if (checkPieces(pieces_array) == true) {
    return true;
  }
};

var checkHorizontal = function(cell) {
  var current_row = $(cell).attr("class").split(' ')[1];
  var cells_in_row = $( 'ul li .' + current_row);
  var pieces_array = []
  for (i=0; i<7; i++) {
    pieces_array.push($(cells_in_row[i]).attr("class").split(' ')[3]);
  }
  if (checkPieces(pieces_array) == true) {
    return true;
  }
};

var checkDiag1 = function(cell) {
  var current_column = $(cell).attr("class").split(' ')[0];
  var current_row = $(cell).attr("class").split(' ')[1];
  var column_num = Number(current_column.replace("column", ""));
  var row_num = Number(current_row.replace("row", ""));
  var pieces_array = []
  for(i=0; i <= (6-row_num); i++){
    if ($('ul li .column' + (column_num +i).toString() + ".row" +(row_num +i).toString()).attr("class")){
    pieces_array.push($('ul li .column' + (column_num +i).toString() + ".row" +(row_num +i).toString()).attr("class").split(' ')[3])
    }
  }
  for(i=1; i <= (7-row_num); i++){
    if ($('ul li .column' + (column_num -i).toString() + ".row" +(row_num -i).toString()).attr("class")){
    pieces_array.unshift($('ul li .column' + (column_num -i).toString() + ".row" +(row_num -i).toString()).attr("class").split(' ')[3])
    }
  }
  if (checkPieces(pieces_array) == true) {
    return true;
  }
};

var checkDiag2 = function(cell) {
  var current_column = $(cell).attr("class").split(' ')[0];
  var current_row = $(cell).attr("class").split(' ')[1];
  var column_num = Number(current_column.replace("column", ""));
  var row_num = Number(current_row.replace("row", ""));
  var pieces_array = []
  for(i=0; i <= (6-row_num); i++){
    if ($('ul li .column' + (column_num -i).toString() + ".row" +(row_num +i).toString()).attr("class")){
    pieces_array.unshift($('ul li .column' + (column_num -i).toString() + ".row" +(row_num +i)).attr("class").split(' ')[3])
    }
  }
  for(i=1; i <= (7-row_num); i++){
    if ($('ul li .column' + (column_num +i).toString() + ".row" +(row_num -i).toString()).attr("class")){
    pieces_array.push($('ul li .column' + (column_num +i).toString() + ".row" +(row_num -i)).attr("class").split(' ')[3])
    }
  }
  if (checkPieces(pieces_array) == true) {
    return true;
  }
};
