//  Write a JavaScript function to check whether a string is blank or not

function isBlank(string){
  return !!string.length;
}

console.log(isBlank(''));

//  Write a JavaScript function to split a string and convert it into an array of words

function string_to_array(string){
  return string.split(" ");
}

console.log(string_to_array("Robin Singh"));

// Write a JavaScript function to extract a specified number of characters from a string
let extractCharacters = (string, extract) => string.slice(0,extract);

console.log(extractCharacters("Robin Singh", 4));

// Write a JavaScript function to convert a string in abbreviated form. 

let abbrev_name = string => `${string.split(" ")[0]} ${string.split(" ")[1].slice(0,1)}.`;

console.log(abbrev_name("Robin Singh"));

//Write a JavaScript function to hide email addresses to protect from unauthorized user
let protect_email = string => `${string.split("@")[0].slice(0,5)}...@${string.split("@")[1]}`;

console.log(protect_email("robin_singh@example.com"));

//Write a JavaScript function to parameterize a string

let string_parameterize = string => string.toLowerCase().split(" ").join("-");

console.log(string_parameterize("Robin Singh from USA"));

//Write a JavaScript function to concatenates a given string n times (default is 1)

let repeat = (string, n = 1) => string.repeat(n);

console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));

//  Write a JavaScript function to insert a string within a string at a particular position

function insert(string, word, position = 0){
  let a = string.split('');
  a.splice(position, 0 , word);
  return a.join('');
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));

// Write a JavaScript function to chop a string into chunks of a given length

function string_chop(string, chop = 1){
  let arrString = Array.from(string);
  let arr = [];
  while(arrString.length > -1){
    for(let i = 0; i < chop; i++){
      var value = arrString.splice(0, 1);
      arr.push(value);
      if(arrString.length == 0) return arr.join('');
    }
    arr.push("-");
  }
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resourceu',3));

// Write a JavaScript function to repeat a string a specified times

function repeat_string(string, count){
  if(count === undefined) return "Error in string or count.";
  return string.repeat(count);
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));

//Write a JavaScript function to strip leading and trailing spaces from a string.

function strip(string){
  let replacer = new RegExp(" ", 'gm');
  return string.replace(replacer, '');
}

console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));

//Write a JavaScript function to truncate a string to a certain number of words. Go to the editor

let truncate = (string, numberOfWords) => string.split(' ').slice(0,numberOfWords).join(' ');

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

//Write a JavaScript function to alphabetize a given string. 
// Alphabetize string : An individual string can be alphabetized. 
// This rearranges the letters so they are sorted A to Z.
// Output :
// "SUadeeinsttt"

let alphabetize_string = string => string.split('').sort().join('');

console.log(alphabetize_string('United States'));

//Write a JavaScript function to convert ASCII to Hexadecimal format

function ascii_to_hexa(ascii, hex = ''){
  for(let i = 0; i < ascii.length; i++){
    hex += ascii.charCodeAt(i).toString(16);
  }
  return hex;
}

console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));


//Write a JavaScript function to convert Hexadecimal to ASCII format

function hex_to_ascii(hex, ascii = ''){
  let hexStr = hex.toString();
  for(let i = 0; i < hex.length && hex.substr(i, 2) != '00'; i += 2){
    ascii += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return ascii;
}

console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));

// Write a JavaScript function to remove?non-printable ASCII chars

let remove_non_ascii = (str = '') => str.toString().replace(/[^\x20-\x7E]/g, '');

console.log(remove_non_ascii('aAcCeEePHP-MySQLoO??uU'));

// Write a JavaScript function to remove non-word characters.

let remove_non_ascii = (str = '') => {
  let regular = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;
  return str.toString().replace(regular, '');
}

console.log(remove_non_ascii('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

// Write a JavaScript function to remove non-word characters.

let strip_html_tags = (str = '') => str.toString().replace(/<[^>]*>/g, '');

console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));


// Write a JavaScript function to create a Zerofilled value with optional +, - sign


let zeroFill = (str = '', length = 0, sign = '') => String(sign) + '0'.repeat(length - String(str).length) + str;
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));

// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison. Go to the editor

let compare_strings = (str, compareStr) => str.toLowerCase() === compareStr.toLowerCase();
console.log(compare_strings('abcd', 'AbcD'));
//true
console.log(compare_strings('ABCD', 'Abce'));
//false

//Write a JavaScript function to test whether a string starts with a specified string. 

let startsWith = (str, find) => !!str.indexOf(find) == 0;

console.log(startsWith('js string exercises', 'js'));

// Write a JavaScript function to test whether a string ends with a specified string. 

let endsWith = (str, find) => {
  let arr = str.split(" ");
  return !!String(arr[arr.length - 1]).match(find);
} 

console.log(endsWith('JS string exercises', 'exercises'));

// Write a JavaScript function to get unique guid (an acronym for
// 'Globally Unique Identifier?) of the specified length, or 32 by default 

function guid(length = 32) {

  function fillArray(array, from, to){
      for(let i = array.length; from <= to; i++){
        array[i] = from;
        from++;
      }
  }

  let charCode = [];
  let arrayNum = new Array(length);
  fillArray(charCode, 65, 90);
  fillArray(charCode, 97, 122);
  fillArray(charCode, 30, 39);
  for(let i = 0; i < length; i++) {
    var randomValue = charCode[Math.floor(charCode.length * Math.random())];
    arrayNum[i] = randomValue;
  }
  return String.fromCharCode(...arrayNum);
}

console.log(guid());
console.log(guid(15));

// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

function remove_first_occurrence (string, word = 0) {
  if (word == 0) return string;
  let arr = string.split(" ");
  arr.splice(arr.indexOf(word), 1);
  return arr.join(" ")
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

//"The quick brown fox jumps over lazy dog"

// Write a JavaScript function to find a word within a string.

function search_word (str, word) {
    let replacer = new RegExp(word, 'gm');
    console.log(`${letter} : ${str.length - str.replace(replacer, "").length}`)
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));

//"'fox' was found 1 times."
//"'aa' was found 2 times."

//Write a JavaScript function to create a case-insensitive search. Go to the editor

let case_insensitive_search = (str, word) => str.toLowerCase().match(word.toLowerCase()) ? "Matched" : "Not Matched";

console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
//"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
//"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
//"Not Matched"


// Write a JavaScript function to Uncapitalize? the first character of a string.

let uncapitalize = string => string.toLowerCase();
console.log(uncapitalize('Js string exercises'));
"js string exercises"

// Write a JavaScript function to Uncapitalize the first letter of each word of a string.

function unCapitalize_Words(string) {
  let arrOfString = string.split(" ");
  
  for(let i = 0; i < arrOfString.length; i++){
    if(arrOfString[i][0] != arrOfString[i][0].toLowerCase()) {
      arrOfString[i] = arrOfString[i][0].toLowerCase() + arrOfString[i].substr(1);
    }
  }

  return arrOfString.join(" ")
}

console.log(unCapitalize_Words('Js String Exercises'));
"js string exercises"

// Write a JavaScript function to capitalize each word in the string

let capitalizeWords = string => string.toUpperCase();
console.log(capitalizeWords('js string exercises'));

// Write a JavaScript function to uncapitalize each word in the string

let unCapitalizeWords = string => string.toLowerCase();
console.log(unCapitalizeWords('js string exercises'));


// Write a JavaScript function to test whether the character at the provided (character) index is upper case.

let isUpperCaseAt = (string, position) => string[position] == string[position].toUpperCase();
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

// Write a JavaScript function to test whether the character at the provided (character) index is lower case.

let isLowerCaseAt = (string, position) => string[position] == string[position].toLowerCase();
console.log(isLowerCaseAt('Js STRING EXERCISES', 1));

//Write a JavaScript function to uncamelize a string. 

function uncamelize (word, sign = " ") {
  let arrWord = Array.from(word);
  for(let i = 0; i < arrWord.length; i++){
    if(arrWord[i] == arrWord[i][0].toUpperCase()) {
      arrWord.splice(i, 0, sign)
      i++;
    }
  }
  return arrWord.join("")
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
