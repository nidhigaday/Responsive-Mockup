$(document).ready(function() {
    //script for nav tabs
    	//trigger - tabs li a
    	//connection between trigger and tabs - data attribute
    	//tabs - .com-tab

   	 	// find each tab and click it
    	// when clicked
   		// find connector
    	// hide all tabs
    	// find the tab with that connector and show it

    	// better to use CSS instead using hide or show ()

    	$('.tabs').on('click', 'li a', function(event){
    		event.preventDefault();
    		//$(this).parent().parent().css("text-transform","capitalize");
    		$('.com-tag').removeClass('active');
    		$('.tabs li').removeClass('tab-active');
    		$('.com-tag.' + $(this).attr('data-tab')).addClass('active');
    		$(this).parent().addClass('tab-active');
    		//$(this).css("text-transform","capitalize");

    	});


});
