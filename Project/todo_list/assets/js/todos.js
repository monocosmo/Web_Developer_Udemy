// Check off todos by clicking
$("li").click(function(){
  $(this).toggleClass("completed");
});

// Delete todos
$("span").click(function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation(); // Stop bubbling
})