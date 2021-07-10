var subjectSelect = document.querySelector('#subject');
var inputNameData = document.querySelector('#name');
var inputGradeData = document.querySelector('#grade');

    /////////////////////////////////////

var passedListNode = document.querySelector('.passedList');
var failedListNode = document.querySelector('.failedList');

    /////////////////////////////////////

var statisticPassNode = document.querySelector('#passed-num');
var statisticFailNode = document.querySelector('#failed-num');
var statisticPercentPassNode = document.querySelector('#passed-percent');
var statisticPercentFailNode = document.querySelector('#failed-percent');

    /////////////////////////////////////

var bttNode = document.querySelector('.button-add');

bttNode.addEventListener('click', validatesData);
bttNode.addEventListener('click', addStudentDataToList);
bttNode.addEventListener('click', refreshStatistic);