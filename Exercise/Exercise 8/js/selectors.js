// Try four methods to select <p id="first" class="special">Hello</p>
var method1 = document.getElementById("first");
var method2 = document.getElementsByClassName("special")[0];
var method3 = document.querySelector("#first");
var method4 = document.querySelectorAll(".special")[0];

// test run
method1.style.color = "blue";
method2.style.background = "pink";
method3.style.fontSize = "22px";
method4.style.border = "black solid 1px";