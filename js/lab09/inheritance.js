//  Implementing filter method on the String proto type


String.prototype.filter = function (word) {
  return this.replace(word, '');
};

//  Bubble sort algorithm on the array object

Array.prototype.bubbleSort = function () {
  for (let x = 0; x < this.length; x++) {
    for (let y = 0; y < this.length - x - 1; y++) {
      if (this[y] > this[y + 1]) {
        let z = this[y];
        this[y] = this[y + 1];
        this[y + 1] = z;
      }
    }
  }
  return this;
};

let array = [6, 4, 0, 3, -2, 1];
console.log(array.bubbleSort());

let sentences = 'This is not what I am supposed to do';
// let us filter the word 'not'
console.log(sentences.filter('not'));

var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return this.name + ', ' + this.age + ' years old.';
};
var Student = function () {};
Student.prototype = new Person();

Student.prototype.learn = function (subject) {
  console.log(this.name + ' just learned ' + subject);
};
var me = new Student();
me.initialize('John', 25);
me.learn('Inheritance');



let Teacher = function(){};

Teacher.prototype= new Person();
Teacher.prototype.teach = function(subject){
    console.log(this.name + ' is now teaching ' + subject);
}

let john = new Teacher();
john.initialize('John Doe',36)
john.teach('Software Architecture');