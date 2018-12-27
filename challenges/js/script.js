/* $("#button_effects1").mouseenter(function(){
        $('#button_effects1').fadeTo(1000, 0.5);
    });
    $("#button_effects1").mouseleave(function(){
        $('#button_effects1').fadeTo(1000, 1);
    });*/

$(document).ready(function() {
 	//removes class makeRed, adds class makeBorder on mouseenter
 	$("button").mouseenter(function(){
 	 $(this).removeClass("makeRed").addClass("makeBorder");

 	});
 	//reverses above on mouseleave
 	$("button").mouseleave(function(){
 	 $("button").removeClass("makeBorder").addClass("makeRed");

 	});
});

/*On mouseenter remove the red class and add the border class.
On mouseleave reverse the above.
Use method chaining to achieve the above.

 below we can do an example of a methodchaining (below is an example from code institute video)
    $("#myButton").removeClass("blueBox").addClass("yellowBox");
    $("p").css("color", "blue").slideUp(2000).slideDown(2000);
    
    we can do the same methodchaining with the attr method with a query the first parameter, and answer/value the second parameter
    $("a").attr("href","http://www.example.com" )*/

/*When the button is clicked, make the paragraph slide up. When clicked again, make it slide down. 
This effect is a real-world example of how jQuery can be used on a button or a menu item.*/

//toggles paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").slideToggle(1000);
 	});
 	
 	$("button").click(function(){
 	 $("p").hide(1000).show(1000); 
 	 
 	});
 	
 	$("button").click(function(){
 	 $("p").fadeIn().fadeOut();
 	});

//challenge 4: Go to eir.ie Using Developer tools to change all the links (hrefs) so they point to codeinstitute.net.
//Answer is $("a").attr("href". "www.codeinstitute.net"); in the console section in dev tools
 	
 	
 




