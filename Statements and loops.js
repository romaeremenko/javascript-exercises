//Write a JavaScript program that accept two integers and display the larger

let larger = (a,b) => a > b ? a : b;

console.log(larger(4,5));
console.log(larger(8,5));

//Write a JavaScript to find the sign of product
//of three numbers. Display an alert box with the specified sign

let sign = (a,b,c) => a*b*c < 0 ? "-" : "+";

console.log(sign(4,5,-7));
console.log(sign(8,5,6));

//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

function sort(x,y,z){
  let arr = [];
  if (x > y && x > z) {
        if (y>z) console.log(x + ", " + y + ", " +z);
        else console.log(x + ", " + z + ", " +y);
  }
  else if (y > x && y > z) {
        if (x>z) console.log(y + ", " + x + ", " +z);
        else console.log(y + ", " + z + ", " +x);
  }
  else if (z > x && z > y) {
        if (x>y) console.log(z + ", " + x + ", " +y);
        else console.log(z + ", " + y + ", " +x);
  }        
}

sort(3,5,3);
sort(3,5,6);
sort(3,5,-3);

// Write a JavaScript for loop that will iterate from 0 to 15. 
// For each iteration, it will check if the current number is odd or even, 
// and display a message to the screen

function iterate(x,y){
  for(let i = x; i <= y; i++){
    if(i%2 != 0) console.log(`${i} is odd`);
    else console.log(`${i} is even`);
  }      
}

iterate(0,15);

// Write a JavaScript program which compute, the average marks of the following 
// students Then, this average is used to determine the corresponding grade

var students = {'David': 80, 'Vinoth': 77, 'Divya': 88, 'Ishitha': 95, 'Thomas': 68};

function marks(students){
  for(let student in students) {
    if(students[student] < 60)     console.log(student + " grade F");
    else if(students[student] < 70)     console.log(student + " grade D");
    else if(students[student] < 80)     console.log(student + " grade C");
    else if(students[student] < 90)     console.log(student + " grade B");
    else if(students[student] < 100)     console.log(student + " grade A");
  }     
}

marks(students);

// Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the 
// multiples of five print "Buzz". For numbers which are multiples of both 
// three and five print "FizzBuzz".

function iterates(x,y){
  for(let i = x; i <= y; i++){
    if(i%3 == 0 && i%5 == 0) console.log(`${i} FizzBuzz`);
    else if(i%3 == 0) console.log(`${i} Fizz`);
    else if(i%5 == 0) console.log(`${i} Buzz`);  
  }    
}

iterates(1,100);

// Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
// An Armstrong number of three digits is an integer such that the sum of the cubes of
// its digits is equal to the number itself. For example, 371 is an Armstrong number
// since 3**3 + 7**3 + 1**3 = 371.

function isArmstrong(number){
  let digits = number.toString().split('');
  return digits[0]**3 + digits[1]**3 + digits[2]**3 == number;
}

console.log(isArmstrong(371));

// Write a JavaScript program to construct the following pattern, using a nested for loop. 

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

function construct(){
  let pattern = "*";

  for(let i = 0; i < 5; i++){
    console.log(pattern);
    pattern += "*";
  }
}

console.log(construct());

// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

function divisor(firstNmbr, secondNmbr){
  let i = 0;
  let greatest = 0;
  while(i < 1000){
    if(firstNmbr%i == 0 && secondNmbr%i == 0 && i > greatest) greatest = i; 
    i++;
  }

  return greatest;
}

console.log(divisor(66,501));

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000

function sumMultiples(firstNmbr, secondNmbr){
  let i = 0;
  let sum = 0;
  while(i < 1000){
    if(i%firstNmbr === 0 && i%secondNmbr === 0) sum += i;
    i++;
  }

  return sum;
}

console.log(sumMultiples(3,5));