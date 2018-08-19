$(document).ready(function(){
	var selectedBarFlag=0;
	$('.barContent').animate({height: "0px"}).hide();
    $( ".barTitle" ).click(function(){
    	if(this.id==$("#"+this.id).next().data("content") && selectedBarFlag!=this.id)
    	{
    		$("#"+selectedBarFlag).next().animate({height: "0px"}).hide();
    		$("#"+this.id).next().animate({height: "30px"}).show();
    	}
    	selectedBarFlag=this.id;
    })
});