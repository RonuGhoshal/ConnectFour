$(document).ready(function() {
  turn = 1
  columnSelector();
  // var open_cell = find_open_cell(column);
  // change_cell_color(open_cell);
  // checkForWin(open_cell);

})

var columnSelector = function(){
  $(".standardcolumn").on("click", function(event){
    event.preventDefault();
    var column_id = this.id;
    //return column_id;
    var open_cell = find_open_cell(column_id);
    change_cell_color(open_cell);
    checkForWin(open_cell);
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
  return "all cells full";
};

var change_cell_color = function(cell) {
  cell.removeClass("nopiece");
  if (turn % 2 == 0) {

    cell.addClass("redpiece");
  }

  else {
    console.log("blackpiece")
    cell.addClass("blackpiece");
  }
  turn++
};


var checkForWin = function(cell) {
  if (checkVertical(cell) == true) {
    console.log("Vert");
    alert("CONNECT FOUR! You win");
  }
  else if (checkHorizontal(cell) == true) {
    console.log("Horz");
    alert("CONNECT FOUR! You win");
  }
  else if (checkDiag1(cell) == true) {
    console.log("Diag1");
    alert("CONNECT FOUR! You win");
  }
  else if (checkDiag2(cell) == true) {
    console.log("Diag2");
    alert("CONNECT FOUR! You win");
  }
};


var checkVertical = function(cell){
  var current_column = $(cell).attr("class").split(' ')[0];
  var cells_in_column = $( '#' + current_column + ' li div' );
  var pieces_array = []
  for (i=0; i<6; i++) {
    pieces_array.push($(cells_in_column[i]).attr("class").split(' ')[3]);
  }
  // console.log(pieces_array);
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
    pieces_array.push($(cells_in_row[i]).attr("class").split(' ')[3]);
      }
  // console.log(pieces_array);
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
  console.log(current_row)
  var column_num = Number(current_column.replace("column", ""));
  var row_num = Number(current_row.replace("row", ""));
  var pieces_array = []
  for(i=0; i <= (row_num-6); i++){
    // console.log((column_num +i).toString());
    // console.log($('ul li .column' + (column_num +i).toString() + ".row" +(row_num +i).toString()).attr("class").split(' ')[3]);
    if ($('ul li .column' + (column_num +i).toString() + ".row" +(row_num +i).toString()).attr("class")){
    pieces_array.push($('ul li .column' + (column_num +i).toString() + ".row" +(row_num +i).toString()).attr("class").split(' ')[3])
    }
    console.log("up")
    console.log(i)
    console.log(6-row_num)
    console.log(row_num)
  }
  for(i=1; i <= (6-row_num); i++){
    if ($('ul li .column' + (column_num -i).toString() + ".row" +(row_num -i).toString()).attr("class")){
    pieces_array.unshift($('ul li .column' + (column_num +i).toString() + ".row" +(row_num +i).toString()).attr("class").split(' ')[3])
  }
  }
  console.log(pieces_array);
  for (i=0; i<4; i++) {
    if (pieces_array[i] != "nopiece") {
      if (pieces_array[i] == pieces_array[i + 1] && pieces_array[i] == pieces_array[i + 2] && pieces_array[i] == pieces_array[i + 3]) {
        return true;
      };
    };
  };
};

var checkDiag2 = function(cell) {
  var current_column = $(cell).attr("class").split(' ')[0];
  var current_row = $(cell).attr("class").split(' ')[1];
  var column_num = Number(current_column.replace("column", ""));
  var row_num = Number(current_row.replace("row", ""));
  var pieces_array = []
  for(i=0; i < (6-row_num); i++){
    if ($('ul li .column' + (column_num -i).toString() + ".row" +(row_num +i).toString()).attr("class")){
    pieces_array.unshift($('ul li .column' + (column_num -i).toString() + ".row" +(row_num +i)).attr("class").split(' ')[3])
    }
  }
  for(i=0; i > (6-row_num); i--){
    if ($('ul li .column' + (column_num +i).toString() + ".row" +(row_num -i).toString()).attr("class")){
    pieces_array.push($('ul li .column' + (column_num +i).toString() + ".row" +(row_num -i)).attr("class").split(' ')[3])
    }
  }
  for (i=0; i<4; i++) {
    if (pieces_array[i] != "nopiece") {
      if (pieces_array[i] == pieces_array[i + 1] && pieces_array[i] == pieces_array[i + 2] && pieces_array[i] == pieces_array[i + 3]) {
        return true;
      };
    };
  };
};

