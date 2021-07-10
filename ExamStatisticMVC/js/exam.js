function Exam (subjectName, student, grade) {
    var studentX = student.split(' ')
    this.subject = new Subject (subjectName);
    this.student = new Student (studentX[0], studentX[1]);
    this.grade = grade;
}

Exam.prototype.getExaminfo = function () {
    return this.subject.getSubjectName() + ' - ' + this.student.getStudentData();
}

Exam.prototype.hasPassed = function () {
    if (this.grade > 5) {
        return 'Passed'
    } else {
        return 'Failed'
    }
}