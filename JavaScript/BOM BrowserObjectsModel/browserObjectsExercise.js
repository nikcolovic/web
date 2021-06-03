function Hello(world) {
    return world = 'Hello world3'
}
console.log(Hello())

// window.navigator
function browserInfo() {
    console.log(navigator.platform) //the platform on which the browser is running
    console.log(navigator.appVersion) //the information about the browser version
    console.log(navigator.appName) //the company that created that browser
}
browserInfo();

function isOnline () {
   navigator.onLine ? console.log('On line') : console.log('Offline');
}
isOnline();

window.screen

function printDimensions () {
    console.log(screen.availWidth);
    console.log(screen.availHeight);
    console.log(screen.height)
}
//location
function printUrlInfo () {
    console.log(location.href);
    console.log(location.host);
    console.log(location.protocol);
    console.log(location.origin);
}
printUrlInfo();

function reloadPage() {
    location.reload();
}

function replacePage(){
    location.replace("http://w3schools.com")
}

// storage
/*Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage.*/

(function storesData(){
    localStorage.setItem ('putovanje', ' letovanje');
    localStorage.setItem ('prevoz', 'automobilom');
    localStorage.setItem ('smestaj', 'hotel');
})();

function readData () {
    var data = localStorage.getItem ('putovanje');
    if(!data) {
        return 'There is no data';
    } else {
        return data
    }
}
console.log(readData());

function removeData() {
    var data1 = localStorage.removeItem('prevoz');
    return data1;
};
console.log(removeData()); // ne valja undefined u consoli
console.log(readData());

//window.history
//Play around with the browser forward/back navigation.
//Implement a function that navigates two pages back.
window.history.forward();
window.history.back();

/*Window Methods
Create a function that shows the user a greeting message using alert
Then a question is presented to the user using prompt
When the user provides the answer, that answer is used in the confirm dialog
The format of the message in the dialog should be: "We will submit this answer now! " + the answer
If the user clicks OK, show alert with success message
If the user clicks Cancel, don't show anything*/

function pleaseAnswer () {
    alert('Welcome to our website');
    var userAnswer = prompt('Please enter your name: ');
    var getUserAnswerLength = userAnswer.length;
    if(getUserAnswerLength > 0) {
        userAnswer;
    }else if (getUserAnswerLength === 0){
        pleaseAnswer();
    }
    var userConfirmation = confirm (
        "We will submit answer now!" + "your answer is: " + userAnswer
    );
    if( userConfirmation === true) {
        alert('Your answer is submited correctly.')
    }
}
pleaseAnswer();
/* HOMEWORK
Math
Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it. */

function randomArray() {
    var randomNumberArray = [];
  
    for (var i = 0; i < 10; i++) {
      var getRandomNumbers = 50 * Math.random();
      randomNumberArray[i] = parseInt(getRandomNumbers);//before I realized that next task is Math.round
    }
    return randomNumberArray;
  }
  var createRandomNum = randomArray();
  console.log("Get random numbers in array:");
  console.log(createRandomNum);

  /* 
  Round
Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
*/
/*
function roundNumbers(createRoundNumbers) {
    var roundNumberArray = [];
  
    for (var i = 0; i < 10; i++) {
      var getRoundNumbers = 50 * Math.round(createRoundNumbers[i]);
      roundNumberArray[i] = getRoundNumbers;

    }
    return roundNumberArray;
  }
  var createRoundNumbers = roundNumbers(createRoundNumbers);
  console.log("Get integer numbers in array:");
  console.log(createRoundNumbers);*/

  /*function roundNum(createRandomNum) {
    var roundNumArray = [];
  
    for (var i = 0; i < 10; i++) {
      var generateRoundNum = Math.round(createRandomNum[i]);
      roundNumArray[i] = generateRoundNum;
    }
    return roundNumberArray;
  }
  
  var createRoundNum = roundNum(createRandomNum);
  console.log("Round numbers in array:");
  console.log(createRoundNum);*/
/*
  Floor
Create a function that uses the passed array of numbers
 and rounds all its elements to the nearest 
integer.
Print out the modified array in the console.
Use the first function for generating the 
input array. */




/*Max
Create a function that finds and prints out 
the biggest element in the passed array of 
numbers.*/

function maxNumber() {
    return Math.max(1, 300, 822 , 1500, 25000000)
}
console.log(maxNumber())

/*Date
    
Print out the whole date object in the console.
Print out the current time in the console.
Print out the current date in the console.*/

function fullDate() {
    var a = new Date();
    console.log(a);
    var b = a.getHours() + ":" + a.getMinutes();
    console.log(b);
    var c = a.getDate() + "." + (a.getMonth() + 1) + "." + a.getFullYear() + ".";
    console.log(c);
}
fullDate();
        
