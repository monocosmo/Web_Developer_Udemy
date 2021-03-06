// Check off todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Delete todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation(); // Stop bubbling
})

// Create new todos
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val(""); // Clear the input
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
  }
})

$(".fa-edit").click(function(){
  $("input[type='text']").fadeToggle();
});