// JS file of todoList.html
var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {
  if(input === "list") {
    // "list"
    for(i = 0; i < todos.length; i++) {
      console.log(todos[i]);
    }
  } else if(input === "new") {
    // "new"
    var newItem = prompt("What would you like to add in the list?");
    todos.push(newItem);
  }
  var input = prompt("What would you like to do?");
}

alert("Quit the Todo List")