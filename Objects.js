// Write a JavaScript program to list the properties of a JavaScript object
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let listOfProperties = (obj) => {
  for (let prop in obj){
       if(obj.hasOwnProperty(prop)) console.log(prop);
  }
}

listOfProperties(student);

// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let deleteRolnoProperty = (obj) => {
    if(obj.hasOwnProperty('rollno')) delete obj.rollno;
}

console.log(student);
deleteRolnoProperty(student);
console.log(student);

// Write a JavaScript program to get the length of an JavaScript object.

let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let getLengthOfObject = (obj, length = 0) => {
  for (let prop in obj){
       if(obj.hasOwnProperty(prop)) length++;
  }

  return length
}

console.log(getLengthOfObject(student));

// Write a JavaScript program to display the reading status 
//(i.e. display book name, author name and reading status) of the following books

let library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

let getStatusOfBook = books => {
  let info = book => `Book name: ${book.title}, author: ${book.author}`;
  books.forEach( book => {
    book.readingStatus ? console.log(`Already read ${info(book)}`) : console.log(`You still need to read ${info(book)}`);
  })
}

console.log(getStatusOfBook(library));

// Write a JavaScript program to get the volume of a Cylinder with 
// four decimal places using object classes

class Cylinder {
  constructor(height, diameter){
    this.diameter = diameter;
    this.height = height;
    this.radius = diameter / 2;
  }

  volume(){
    return this.height * Math.PI * this.radius * this.radius;
  }

}

var cyl = new Cylinder(7, 4);

console.log(cyl.volume().toFixed(2));

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

function all_properties(obj){
  let properties = [];
  let proto = obj;
  while(proto != null){
    properties.push( Object.getOwnPropertyNames(proto));
    proto = proto.__proto__;
  }
  return properties.toString();
}

console.log(all_properties(student));

// Write a JavaScript function to retrieve all the values of an object's properties

let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

function all_values(obj){
  for (let prop in obj){
       if(obj.hasOwnProperty(prop)) console.log(obj[prop]);
    }
}

console.log(all_values(student));

// Write a JavaScript function to convert an object into a list of `[key, value]` pairs
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

function all_values(obj){
  return Object.entries(obj);
}

console.log(all_values(student));
