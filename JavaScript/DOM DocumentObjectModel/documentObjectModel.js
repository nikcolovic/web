/*
Selecting One/Multiple Elements
Create two unordered lists on the page.
    
Create a function that selects the second list and applies a class 
that sets some background color to it.

Create a second function that, when triggered, selects all <li> elements on the page. 
The function also sets a class that sets some bg color to every <li> element.


*/


function changeBackground(){
  var list = document.querySelector("body").getElementsByTagName("ul")
  list[1].style.backgroundColor = "red";
}
changeBackground();


function rowBackground(){
  var rows = document.querySelector("body").getElementsByTagName("li")
  for (var i = 0; i < rows.length; i++) {
    switch (i) {
      case 0:
          rows[i].style.backgroundColor = "red";
          break;
      case 1:
          rows[i].style.backgroundColor = "green";
          break;
      case 2:
            rows[i].style.backgroundColor = "blue";
            break;
      case 3:
            rows[i].style.backgroundColor = "yellow";
            break;
      case 4:
            rows[i].style.backgroundColor = "pink";
            break;
      case 5:
            rows[i].style.backgroundColor = "violet";
            break;
      default:
            rows[i].style.backgroundColor = "white"
    }
  }
  console.log(rows)
}
rowBackground();

/*
Create one more unordered list and one more function
The function​ should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the text to uppercase.*/

function backgroundAndUpperCase () {
var list = document.querySelector("body").getElementsByTagName("ul")

var rows = document.querySelector("ul").getElementsByTagName("li");

rows[2].style.backgroundColor = "brown";

    for(var i = 0; i < rows.length; i++) {
      rows[i] = rows[i].textContent.toUpperCase();
    } 
console.log(rows)
}

backgroundAndUpperCase();

//Traversing
/*
Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its background color.

Create a function that selects the <li> element with class “active”.
Remove the class from that element, and then select the first <li> element 
in the first unordered list using node relations.
Apply class to that newly selected <li> element
*/

function removeClass() {
  var row = document.querySelector(".active");
  row.removeAttribute("class");

  var row1 = document.querySelector(".traversing").firstElementChild.firstElementChild.firstElementChild;

  row1.setAttribute("class", "active")
  console.log(row)
  console.log(row1)
  
}
removeClass();

/*
Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.

Create a function that takes text from one of the <li> elements and presents it on screen using alert.
  
Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list 
and replace its text with text passed as the function argument.
*/
function alert() {
  var row = document.querySelector(".alert").firstElementChild.firstElementChild;
  var alert = row.textContent;
  console.log(alert);
}
alert();

function changeText() {
  var liEl = document.querySelector("ul li");
  document.querySelector("ul li").textContent = "novi clan";
  console.log(liEl);
}
changeText();
/*
InnerHTML
Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second is a 
DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the select element.
Add the whole dropdown list to DOM .

Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page.*/

function createDropdown(arr, domNode) {
    var select = document.createElement('select');
    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement('option');
         option.innerHTML = arr[i];
         select.appendChild(option);
    }
    var body = document.querySelector('body');
    var node = document.createElement(domNode);
    node.appendChild(select);  
    body.appendChild(node);    
}

var array = ['Home', 'About', 'Contact'];
createDropdown(array, 'div');
createDropdown (['Box_1', 'Box_2', 'Box_3'], 'div');

/*
document.querySelector('section p').innerHTML;
document.querySelector('about-section').innerHTML = "<img src='#' alt='image'>";
// Create a new element and store it in a variable
var listItem= document.createElement('li');
// Create text node and store it in a variable
var text = document.createTextNode('some text');
// Attach the text node to the element
listItem.appendChild(text);
// find an element in DOM where this new element should be added
var someList = document.querySelector('ul');
// append new element to the list
someList.appendChild(listItem);
parentElem.appendChild(node)
	//appends node as the last child of parentElem

parentElem.insertBefore(node, nextSibling)
	//inserts node before nextSibling into parentElem

parentElem.replaceChild(node, oldChild)
	//replaces oldChild with node among  children of parentElem */



/*
Attributes
Create a form that contains multiple input elements with labels.
Some of those elements should be required.

Create a function that validates the form.
The function checks each input element that belongs to the form.
If the element has the required attribute and no data, it should get red borders.*/


function validateForm () {
  var input = document.getElementsByTagName('input');
  for (var i = 0; i < input.length; i++) {
      if (input[i].hasAttribute('required') && input[i].value === "") {
          input[i].style.borderColor = 'red';
      }
  }
}
validateForm ()





