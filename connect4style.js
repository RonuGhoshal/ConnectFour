$(document).ready(function(){

columnSelector();


});


var columnSelector = function(){
  $(".standardcolumn").on("click", function(event){
    event.preventDefault();
    var column_id = this.id;
    return column_id;
  });
};









