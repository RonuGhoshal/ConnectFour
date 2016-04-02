$(document).ready(function(){

columnSelector();

});


var columnSelector = function(){
  $("#column1button").on("click", function(event){
    event.preventDefault();
    console.log('It totally worked');
  });
};

