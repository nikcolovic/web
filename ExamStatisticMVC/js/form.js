function validatesData () {
    if (inputNameData.value === "") {
        alert ("NAME and SURNAME are required!");
        bttNode.removeEventListener('click', addStudentDataToList);
        bttNode.removeEventListener('click', refreshStatistic);
    } else if (inputNameData.value.split(" ").length !== 2) {
        alert ("INVALID INPUT!");
        bttNode.removeEventListener('click', addStudentDataToList);
        bttNode.removeEventListener('click', refreshStatistic);
    } else if (inputNameData.value.split(" ").length === 2) {
        bttNode.addEventListener('click', addStudentDataToList);
        bttNode.addEventListener('click', refreshStatistic);
    }
    if (inputGradeData.value === "") {
        alert ("GRADE is required!");
        bttNode.removeEventListener('click', addStudentDataToList);
        bttNode.removeEventListener('click', refreshStatistic);
    } else if (inputGradeData.value < 1 || inputGradeData.value > 10) {
        alert ("Range of grade from 1 to 10");
        bttNode.removeEventListener('click', addStudentDataToList);
        bttNode.removeEventListener('click', refreshStatistic);
    } else if (inputGradeData.value > 0 || inputGradeData.value < 11) {
        bttNode.addEventListener('click', addStudentDataToList);
        bttNode.addEventListener('click', refreshStatistic);
    }
}

// Use constructor StudentList
var listsForPassedFailed = new StudentsList ();

// Function for add data in pass/fail list
function addStudentDataToList () {
    
    // Use constructor Exam
    var examInfo = new Exam (subjectSelect.value, inputNameData.value, inputGradeData.value);
    var passOrFail = examInfo.hasPassed();
    var elementLi = document.createElement('li');
    
    if (passOrFail === 'Passed') {
        passedListNode.appendChild(elementLi);
        elementLi.textContent = examInfo.getExaminfo() + ' ' + examInfo.grade;
        listsForPassedFailed.addStudentsToPassList(examInfo);
    } else if (passOrFail === 'Failed') {
        failedListNode.appendChild(elementLi);
        elementLi.textContent = examInfo.getExaminfo() + ' ' + examInfo.grade;
        listsForPassedFailed.addStudentsToFailList(examInfo);
    }
}

// Func for refresh statistics
function refreshStatistic () {

    var numPassStudents = listsForPassedFailed.passedStudents.length;
    var numFailStudents = listsForPassedFailed.failedStudents.length;
    statisticPassNode.textContent = numPassStudents;
    statisticFailNode.textContent = numFailStudents;
    statisticPercentPassNode.textContent = Math.round(numPassStudents * 100 / (numPassStudents + numFailStudents)) + '%';
    statisticPercentFailNode.textContent = 100 - Math.round(numPassStudents * 100 / (numPassStudents + numFailStudents)) + '%';
}