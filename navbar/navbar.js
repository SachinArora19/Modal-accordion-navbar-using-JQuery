$(document).ready(function(){
	var navbar = $('.navbarDiv');
    $('#collapseList').on('click', function(e) {
        //e.preventDefault();
        navbar.slideToggle();
    });
    $(window).resize(function(){
        if($(window).width() > 700 && navbar.is(':hidden')) {
            navbar.removeAttr('style');
            //$("#collapseList").css("display", "none");
            //$('.navbarDiv').css("display", "block");
        }
        if($(window).width() < 700) {
            //$("#collapseList").css("display", "block");
            //$('.navbarDiv').css("display", "none");
        }
    }); 
    $('.navbarOptions').on('click', function(e) {                
        if($(window).width() < 700 ) {
            navbar.slideToggle(); 
        }
    });
});