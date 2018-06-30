// JS file of todoList.html
var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {
  if(input === "list") {
    // "list"
    console.log("**********");
    for(i = 0; i < todos.length; i++) {
      console.log(i + ": " + todos[i]);
    }
    console.log("**********");
  } else if(input === "new") {
    // "new"
    var newItem = prompt("What would you like to add in the list?");
    todos.push(newItem);
  } else if(input === "delete") {
    // "delete"
    var index = prompt("Enter index of todo to delete:");
    todos.splice(index, 1);
  } else {
    alert("Invalid Input!!")
  }
  var input = prompt("What would you like to do?");
}
// "quit"
alert("Quit the Todo List.");