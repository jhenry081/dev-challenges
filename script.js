// function Shape(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }

//   // Write your code below here
//       Shape.prototype.calcPerimeter = function(){
//       let ans = this.sides * this.sideLength;
//       console.log(ans);
//   }

// class Shape {
//   constructor(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }
//   calcPerimeter() {
//     console.log(`The perimeter of ${this.name} is ${this.sides * this.sideLength}`);
//   }
// }
// let shape1 = new Shape("square", 4, 5);
// shape1.calcPerimeter();
// let shape2 = new Shape("triangle", 3, 3);
// shape2.calcPerimeter();

// class Square extends Shape {
//   constructor(name = "square", sides = 4, sideLength) {
//     super(name, sides, sideLength);
//   }
//   calcArea(slength) {
//     this.sideLength = slength;
//       let area = slength * slength;
//     console.log(` The area of ${this.name} is ${area}`);
//   }
// }

// let s = new Square();
// s.calcArea(7);
// s.calcPerimeter(7);

// const input = document.querySelector('input');
// const btn = document.querySelector('button');
// const para = document.querySelector('p');

// btn.onclick = function () {
//   const code = input.value;
//   para.textContent = eval(code);
// }

// function Person(first, last, age, gender, interests) {
//   this.name = {
//     first,
//     last
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
// };

// Person.prototype.bio = function () {
//   // First define a string, and make it equal to the part of
//   // the bio that we know will always be the same.
//   let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
//   // define a variable that will contain the pronoun part of
//   // the second sentence
//   let pronoun;

//   // check what the value of gender is, and set pronoun
//   // to an appropriate value in each case
//   if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
//     pronoun = 'He likes ';
//   } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
//     pronoun = 'She likes ';
//   } else {
//     pronoun = 'They like ';
//   }

//   // add the pronoun string on to the end of the main string
//   string += pronoun;

//   // use another conditional to structure the last part of the
//   // second sentence depending on whether the number of interests
//   // is 1, 2, or 3
//   if (this.interests.length === 1) {
//     string += this.interests[0] + '.';
//   } else if (this.interests.length === 2) {
//     string += this.interests[0] + ' and ' + this.interests[1] + '.';
//   } else {
//     // if there are more than 2 interests, we loop through them
//     // all, adding each one to the main string followed by a comma,
//     // except for the last one, which needs an and & a full stop
//     for (let i = 0; i < this.interests.length; i++) {
//       if (i === this.interests.length - 1) {
//         string += 'and ' + this.interests[i] + '.';
//       } else {
//         string += this.interests[i] + ', ';
//       }
//     }
//   }

//   // finally, with the string built, we alert() it
//   alert(string);
// };

// Person.prototype.greeting = function () {
//   alert('Hi! I\'m ' + this.name.first + '.');
// };

// Person.prototype.farewell = function () {
//   alert(this.name.first + ' has left the building. Bye for now!');
// }

// let person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);
// function Teacher(first, last, age, gender, interests, subject) {
//   Person.call(this, first, last, age, gender, interests);

//   this.subject = subject;
// }
// Teacher.prototype = Object.create(Person.prototype);
// Object.defineProperty(Teacher.prototype, 'constructor', {
//   value: Teacher,
//   enumerable: false, // so that it does not appear in 'for in' loop
//   writable: true
// });
// Teacher.prototype.greeting = function () {
//   let prefix;

//   if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
//     prefix = 'Mr.';
//   } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
//     prefix = 'Ms.';
//   } else {
//     prefix = 'Mx.';
//   }

//   alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
// };
// let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
// function Student(first,last,age,gender,interests, classTaken){
//   Person.call(this, first, last, age, gender, interests)
//   this.classTaken = classTaken;
// }
// Student.prototype = Object.create(Person.prototype);
// Object.defineProperty(Student.prototype, 'constructor', {
//   value: Student,
//   enumerable: false,
//   writable: true
// });
// Student.prototype.getClassTaken = function(){
//   alert(this.name.first + " takes " + this.classTaken)
// }
// Student.prototype.greeting = function(){
//   let prefix = "Yo! It's ";
//   alert(prefix + this.name.first);
// }
// let student1 = new Student('John', 'Doe', 19, 'm',['Coding', 'Dates'], 'Mathematics');

// // ECMAScript 2015 syntax
// // Basic Person class

// class Person {
//     constructor(first, last, age, gender, interests) {
//       this.name = {
//         first,
//         last
//       };
//       this.age = age;
//       this.gender = gender;
//       this.interests = interests;
//     }

//     greeting() {
//       console.log(`Hi! I'm ${this.name.first}`);
//     };

//     farewell() {
//       console.log(`${this.name.first} has left the building. Bye for now!`);
//     };
//   }

//   // Instantiate Person

//   let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
//   han.greeting();
//   // Hi! I'm Han

//   let leia = new Person('Leia', 'Organa', 19, 'female' ['Government']);
//   leia.farewell();
//   // Leia has left the building. Bye for now

//   // Extend Person with Teacher

//   class Teacher extends Person {
//     constructor(first, last, age, gender, interests, subject, grade) {
//       super(first, last, age, gender, interests);

//       // subject and grade are specific to Teacher
//       this.subject = subject;
//       this.grade = grade;
//     }
//   }

//   // Instantiate Teacher

//   let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
//   snape.greeting(); // Hi! I'm Severus.
//   snape.farewell(); // Severus has left the building. Bye for now.
//   console.log(snape.age) // 58
//   console.log(snape.subject) // Dark arts

// let buttonBar = document.querySelector('.button-bar');
//   function setColor(e) {
//     buttonBar.style.backgroundColor = e.target.getAttribute('data-color');
//   }

//   buttonBar.addEventListener('click', setColor);
// let canvas = document.querySelector('canvas');
//     let ctx = canvas.getContext('2d');

//     function drawCircle(x, y, size) {
//       ctx.fillStyle = 'white';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.beginPath();
//       ctx.fillStyle = 'black';
//       ctx.arc(x, y, size, 0, 2 * Math.PI);
//       ctx.fill();
//     }

//     let x = 50;
//     let y = 50;
//     const size = 30;

//     drawCircle(x, y, size);

//   document.addEventListener('keydown', moveCircle);

//   /* w = 87,a = 65,s = 83,d = 68 */
// function moveCircle(e) {
//     if(e.keyCode === 87){
//         drawCircle(50, 30, 30);
//     } else if (e.keyCode === 65){
//         drawCircle(40, 50, 30);
//     }
//      else if (e.keyCode === 83){
//         drawCircle(50, 70, 30);
//     }
//      else if (e.keyCode === 68){
//         drawCircle(70, 50, 30);
//     }}
// let btn = document.querySelector('.off');

//     btn.onclick = function () {
//         if (btn.innerHTML === "Machine is off") {
//             btn.innerHTML = "Machine is on";
//           } else {
//             btn.innerHTML = "Machine is off";
//           }
//     }
// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");
// let button = document.getElementById("clearBtn");

// let x = 50;
// let y = 60;
// let width = 100;
// let height = 75;
// let color = "blue";

// function draw() {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, width, height);
// }

// draw();
// const section = document.querySelector("section");
// let names = [
//   "Chris",
//   "Li Kang",
//   "Anne",
//   "Francesca",
//   "Mustafa",
//   "Tina",
//   "Bert",
//   "Jada",
// ];
// let para = document.createElement("p");
// let namesLength = names.length;

// function random(minRange, maxRange) {
//     let randomNumber = Math.floor(Math.random(minRange) * maxRange);
//     return randomNumber;
// }

// function chooseName() {
//   return names[random(0, namesLength)];
// }

// para.textContent = chooseName();
// const section = document.querySelector("section");
// section.appendChild(para);

// let para = document.createElement("p");

// function isPrime(i) {
//   for (let i = 2; i < i; i++) {
//     if (i % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let i = 500;

// do {
//   if(isPrime(i) === true){
//     para.textContent += i + ', ';
//   }
//   i--;
// } while (i >= 2);
// for (let i = 500; i >= 2; i--) {
//   if (isPrime(i) == false) {
//     continue;
//   } else {
//     para.textContent += i + ', ';
//   }
// }

// Don't edit the code below here!
//let section = document.querySelector("section");
//section.appendChild(para);
// let name = "Tina";
// let i = 0;
// let para = document.createElement("p");

// let phonebook = [
//   { name: "Chris", iber: "1549" },
//   { name: "Li Kang", iber: "9634" },
//   { name: "Anne", iber: "9065" },
//   { name: "Francesca", iber: "3001" },
//   { name: "Mustafa", iber: "6888" },
//   { name: "Tina", iber: "4312" },
//   { name: "Bert", iber: "7780" },
//   { name: "Jada", iber: "2282" },
// ];

// while (i < phonebook.length){
//   if (name == phonebook[i].name) {
//     para.textContent += `The name is ${phonebook[i].name} & iber is ${phonebook[i].iber}`;
//   }
//   i++;
// }

// let section = document.querySelector("section");
// section.appendChild(para);

// let myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
// let list = document.createElement("ul");

// for (let i = 0; i < myArray.length; i++) {
//   let listItem = document.createElement("li");
//   let listItemText = document.createTextNode(myArray[i]);
//   listItem.appendChild(listItemText);
//   list.appendChild(listItem);
// }

// const section = document.querySelector("section");
// section.appendChild(list);

// let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// let random = ['tree', 795, [0, 1, 2]];

// let sequence = [1, 1, 2, 3, 5, 8, 13];
// for (let i = 0; i < sequence.length; i++) {
//   console.log(sequence[i]);
// }

// shopping[0] = "Brown Bread";
// shopping[2] = "Apples";
// shopping[3] = "Cornflakes";
// let myArray = myData.split(',');
// myArray.push('Cardiff','Bradford', 'Brighton', 'Bristol');
// myArray.unshift('Edinburgh');
// myArray.shift();
// let myNewString = myArray.join(',');

// console.log(myArray);
// console.log(myData.length);
// console.log(shopping);
// console.log(myNewString);

// let dogNames = ['Rocket','Flash','Bella','Slugger'];
// dogNames.toString();
// console.log(dogNames);
