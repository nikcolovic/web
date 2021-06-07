function changeBackground(){
  var list = document.querySelector("body").getElementsByTagName("ul")
  list[1].style.backgroundColor = "red";
}
changeBackground();


function rowBackground(){
  var rows = document.querySelector("body li").getElementsByTagName("li")
  for (var i = 0; i < rows.length; i++) {
    switch (i) {
      case 0:
          rows[i].style.backgroundColor = "red";
          break;
      case 1:
          rows[i].style.backgroundColor = "white";
          break;
      case 2:
            rows[i].style.backgroundColor = "blue";
            break;
      case 3:
            rows[i].style.backgroundColor = "yellow";
            break;
      case 4:
            rows[i].style.backgroundColor = "black";
            break;
      case 5:
            rows[i].style.backgroundColor = "violet";
            break;
      case 6:
            rows[i].style.backgroundColor = "grey";
            break;
      default:
            rows[i].style.backgroundColor = "black"
    }
  }
  console.log(rows)
}
rowBackground();

/*
function backgroundAndUpperCase () {
var list = document.querySelector("body").getElementsByTagName("ul")

var rows = document.querySelector(".thridList").getElementsByTagName("li");

list[2].style.backgroundColor = "blue";

    for(var i = 0; i < rows.length; i++) {
      rows[i].innerHTML = rows[i].innerHTML.toUpperCase();
    } 
console.log(list)
}

backgroundAndUpperCase();
*/
//Traversing

function removeClass() {
  var row = document.querySelector(".traversing .active");

  row.removeAttribute("class");

  var row2 = document.querySelector(".traversing").firstElementChild.firstElementChild.firstElementChild;

row2.setAttribute("class", "active")
  console.log(row)
}
removeClass();

//Alert

function alert() {
  var row = document.querySelector(".alert").firstElementChild.firstElementChild;
  var alert = row.textContent;
  console.log(alert);
}
alert();

'use strict'
var r;
r = (function add(a,b) {
  return a+b;
})(2,11);

console.log(r)
function f() {
  return function (a,b) {
    return a+b;
  }
}
var result = f()(1,3);
console.log(result);

function o(x) {
  function inner(y) {
    return y+1;
  }
  return x + inner(x);
}
var result = o(5);
console.log(result);
var a,b;
function calculate (a,b) {
  var rb = b % 10;
  var ra = a % 10;
  
  a = a - ra + rb;
  b = b - rb + ra;
  console.log(a,b)
}
calculate (123, 45);
console.log(a,b)
var a = 20;

function f(n) {
  var result = a+ n;
  a = 30;
  return result;
}
console.log(f(5));
function transform (a,b,f) {
  var result;
  result = f(a) + f(b);
  console.log(result);
}
transform(2,4, function (x) {return x+1;});
console.log(console.log('JS'))