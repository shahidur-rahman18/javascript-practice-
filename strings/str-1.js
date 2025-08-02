// Task-1:
// Count how many times a string has the letter a

const str = "hello world";
console.log(str.length);
console.log("Next task \n");

// using loop

let count = 0,
  char,
  string = "kal";
for (let i = 0; i < string.length; i++) {
  count++;
}
console.log(count);

//    splite in string
let stu = "student of the year";
console.log(stu.split(" "));

console.log("Next task \n");

// Task-2:
// Count how many times a string has the letter a or A

let strings = "KmAlndjmAl";
let strCount = 0;
let convertStr = strings.toLowerCase();
console.log(convertStr);
for (let i = 0; i < convertStr.length; i++) {
  if (convertStr[i] == "a" || convertStr == "A") {
    strCount++;
  }
}
console.log("Total A or a are ", strCount);

console.log("Next task \n");

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

let givenStr = "Hello world",
  vowels = 0,
  total = "";
for (let i = 0; i < givenStr.length; i++) {
  let char = givenStr[i].toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    total += `'${givenStr[i]}'`;
    vowels++;
  }
}
console.log("Total vowels are ", vowels, " which are ", total);
console.log("Next task \n");

// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let _str = "hello x and X and Y";
_str= _str.replaceAll('x','y').replaceAll('X','Y')

//////------FOR OVERRIDE REMOVE 
// _str = _str
//   .replaceAll("x", "tem_x")
//   .replaceAll("X", "tem_X")
//   .replaceAll('y','x')
//   .replaceAll('Y','X')
  
//   .replaceAll('tem_x','y')
//   .replaceAll('tem_X','Y')
console.log(_str);


console.log("Next task \n");

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let str_='xiome'
const getValue= str_.includes('x')
console.log(`THE Value ${getValue}`)

// now how to replace this character with other character 

let newStr='xixian'
if(newStr.includes('x')){
    newStr=newStr.replaceAll('x','z')
    console.log(newStr)
    
}

else{
    console.log('No "x" is available')
}


// Task-5:
// Capitalize Every first Letter of each word in a String

let first_Str="world eifh"
 
// Capitalize first letter and join with rest
first_Str = first_Str[0].toUpperCase() + first_Str.slice(1);
console.log(first_Str)


    

