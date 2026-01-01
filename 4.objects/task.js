function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
  if (!this.marks) {
    return;
  }
  this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason; // Опечатка! Должно быть excluded
}

let student1 = new Student("Василий", "мужской", 69);
let student2 = new Student("Алиса", "женский", 19);
let student3 = new Student("Вероника", "женский", 22);