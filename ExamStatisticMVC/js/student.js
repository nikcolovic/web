function StudentsList () {
    this.passedStudents = [];
    this.failedStudents = [];
}

StudentsList.prototype.addStudentsToPassList = function (student) {
    this.passedStudents.push(student);
}

StudentsList.prototype.addStudentsToFailList = function (student) {
    this.failedStudents.push(student);
}