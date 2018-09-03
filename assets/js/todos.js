//Check Off Specific Todos By Clicking
//Using "On" rather than "Click"
//"ul" is the parent of "li", and click will only effect "li"
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
//"ul" is the parent of "span", and click will only effect "span"
$("ul").on("click", "span", function(event){
	//parent() refer to "li", which is "span" parent
	$(this).parent().fadeOut(500, function(){
		//remove "li".
		$(this).remove();
	});

	//stop the propagation
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
//"Which" is a function that capture the keyboard keys
//"13" refer to "Enter" keys
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear the "new todo text"
		$(this).val("");
		//create a new li and add to ul
		//"append" will add element to the selected element
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$("#toggle").click(function(){
	$("input[type='text']").fadeToggle();

});