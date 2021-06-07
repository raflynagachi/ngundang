	
$(document).ready(function() {				   
	// tool tip
	$('.normaltip').aToolTip({
    	toolTipClass: 'aToolTip'});
 });

 $(document).click(function(){
	document.getElementById("my_audio").play();
	console.log('Bernyanyi');
  });