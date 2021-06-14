	
$(document).ready(function() {				   
	// tool tip
	$('.normaltip').aToolTip({
    	toolTipClass: 'aToolTip'});
 });

 $(document).click(function(){
	document.getElementById("my_audio").play();
	console.log('Bernyanyi');
  });

  $('.married_countdown').countdown({until: new Date("Feb 28, 2022 15:00:00")});