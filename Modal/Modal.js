$(document).ready(function(){
    $("#modal").fadeOut(-1);
    //$("#modal").css('visibility','hidden');
	$("#modal").click(function(){
        $("#modal").fadeOut(1000);
    }).children().click(function(e) {
  return false;
});
    $("#openModal").click(function(){
        $("#modal").fadeIn(1000);
    })
});