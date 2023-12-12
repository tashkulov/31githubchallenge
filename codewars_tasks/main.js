// let makeNegative=prompt('Enter the number ')
// if(makeNegative>0){
//     let result= makeNegative-(makeNegative*2)
//     console.log(result)
// }else if(makeNegative<0){
//     console.log(makeNegative)
// }else{
//     console.log(makeNegative)
    
// }

// let words=prompt ('Enter the word : ')
// let better =words.toUpperCase()
// let boolean=false
// if(words===better){
//     better =true
//     console.log(better)
// }else if(words!==better){
//     better=false
//     console.log(better)
// }

// String.prototype.isUpperCase = function(words) {

// }

// console.log("dsfsdf".isUpperCase)

// let num=prompt('Enter number: ')
// if(num%2===0){
//     console.log('Even')
// }else {
//     console.log('Odd')
// }


// let bullets = parseInt(prompt("Enter the bullets"));
// let dragons = parseInt(prompt("Enter the dragons"));

// if (bullets >= 2 * dragons) {
//   console.log(true);
// } else {
//   console.log(false);
// }
//  let str =prompt('Enter the str')
//  let sliced = str.split(' ')
//  console.log(sliced)
//  if(str.length%2==0){
//     str/2
//     console.log(str )
//  }else {
//     console.log(str.split())

//  }

// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 !== 0 || year % 400 === 0) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(isLeapYear(2100)); // Вывод: false

// function findNeedle(haystack) {
//     for(let i=0;i<haystack.length;i++){
//         if(haystack[i].includes('needle')){
//             let find =haystack.indexOf('needle')
//             console.log(`found the needle  at position ${find}`)
//         }
//     }
//   }


//   let haystack=["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] 

//   findNeedle(haystack)


// var hotpo = function(n){
//   if(n%2==0){
//     return n/2
//   }else{
//     return n*3+1
//   }
// }
// console.log(hotpo(6))

// function nbYear(p0, percent, aug, p) {
  // let result =0
  // for(let i =0;i<p;i++){

  //   result+=p0+(p0/100*percent)*100
  // }
  // return result

  // let formula=p0+(p0/100*percent)*100
  // for(let i =0;i<){

  // if(p<formula){
  // }}
  // }
//   function nbYear(p0, percent, aug, p) {
//     for(i = p0,lol = 0; p0 <= p;p0 = p0+((p0/100)*percent)+aug, lol++) {}
//     return lol
// }
// if (obj.hasOwnProperty(direction)) {
//   total += obj[direction];


// function isValidWalk(walk) {
//   if(walk.lenth<=10){

//     let obj={
//       "n":1,
//       "s":-1,
//       "w":1,
//       "e":-1
//     }
//    let total = 0;
//   for (let i = 0; i < walk.length; i++) {
//     const direction = walk[i];
// if (obj.hasOwnProperty(direction)) {
//   total += obj[direction];
//     } else {

//       return false;
//     }
//   }
//   return total === 0;
//   }}
// function isValidWalk(walk) {
//   if (walk.length > 10) {
//     return false;
//   }

//   const obj = {
//     'n': 1,
//     's': -1,
//     'w': -1,
//     'e': 1
//   };

//   let total = 0;

//   for (let i = 0; i < walk.length; i++) {
//     const direction = walk[i]
//     if (direction in obj) {
//       total += obj[direction];
//     } else {
//       return false;
//     }
//   }

//   return total === 0
// }

// console.log(isValidWalk(['w','e','w','e',]));

// var uniqueInOrder = function(iterable) {
//   let arr = Array.isArray(iterable) ? iterable : iterable.split('')
//   let fixedArr = []

//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0 || arr[i] !== arr[i - 1]) {
//       fixedArr.push(arr[i])
//     }
//   }

// console.log(fixedArr) 
// }


// uniqueInOrder('AAAABBBCCDAABBB') 

// function validate(n) {
//   let arr = Array.from(String(n), Number);
//   arr.reverse();
//   let sum=0
//   for (let i = 1; i < arr.length; i += 2) {arr[i] *= 2;if (arr[i] > 9) { arr[i] -= 9;}}
//   for(var i=0;i<arr.length;i++){sum+=arr[i]}if(sum%10===0){return true}else{return false} 
// } 
// console.log(validate(5062821234567892));


  // function validate(n) {
  //   let arr = Array.from(String(n), Number);arr.reverse();let sum=0;for (let i = 1; i < arr.length; i += 2) {arr[i] *= 2;if (arr[i] > 9) { arr[i] -= 9;}};for(var i=0;i<arr.length;i++){sum+=arr[i]}if(sum%10===0){return true}else{return false} 
  // }


  // const arr = ['dell', 'ledl', 'lled', 'cba'];

  // function anagramCounter(array) {
  //   let sum = 0;
  //   let sortedWords = array.map(word => word.split('').sort().join(''));
  //   sortedWords.forEach((sortedWord, index) => {
  //     for (let i = index + 1; i < sortedWords.length; i++) {
  //       if (sortedWord === sortedWords[i]) {sum += 1;
  //       }
  //     }
  //   }
  // );
  //       return sum;}
  
  // console.log(anagramCounter(arr))
  


  // towerBuilder
//   function towerBuilder(nFloors) {
//     let tower = []

//     for (let i = 0; i < nFloors; i++) {
//         let spaces = ' '.repeat(nFloors - i - 1)

//         let stars = '*'.repeat(2 * i + 1)

//         tower.push(spaces + stars + spaces)
    

//     return tower
// }
//   }
// console.log(towerBuilder(1))


// function fn(n,w){
//   let arr=[]
//   for(let i=0;i<n;i++){
//     let spases=''.repeat(n-i-1)
//     let ss =w.repeat(2*i+1)
//     arr.push(spases+ss+spases)

//   }
//   return arr
// }
// console.log(fn(3,"nuris"));

// function whatCentury(year) {
//   let cen = Math.floor(year / 100) + 1;

//   if (cen % 100 === 11 || cen % 100 === 12 || cen % 100 === 13) {
//       return cen + "th";
//   } else if (cen % 10 === 1) {
//       return cen + "st";
//   } else if (cen % 10 === 2) {
//       return cen + "nd";
//   } else if (cen % 10 === 3) {
//       return cen + "rd";
//   } else {
//       return cen + "th";
//   }
// }

// console.log(whatCentury(2000  ))


// function ifChuckSaysSo(){
//   return !true
 
// }

// ifChuckSaysSo()

// function realNumbers(n) {
//   let result = [];

//   for (let i = 1; i <= n; i++) {
//     if (i >= 1 && i <= 10**9 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
//       result.push(i);
//     }
//   }
// ;
//   return result;
// }

// console.log(realNumbers(5))


// function realNumbers(n) {
//   const result = [];
//   const upperLimit = 1000000000;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i <= upperLimit) {
//       result.push(i);
//     }
//   }

//   return result.length;
// }

// const realNumbers = N => {
//   const countDivisible = (num, div) => Math.floor(num / div);
//   const count2 = countDivisible(N, 2);
//   const count3 = countDivisible(N, 3);
//   const count5 = countDivisible(N, 5);
//   const count2and3 = countDivisible(N, 2 * 3);
//   const count2and5 = countDivisible(N, 2 * 5);
//   const count3and5 = countDivisible(N, 3 * 5);
//   const count2and3and5 = countDivisible(N, 2 * 3 * 5);

//   return N - count2 - count3 - count5 + count2and3 + count2and5 + count3and5 - count2and3and5;
// }

// console.log(realNumbers(1000));



//String array duplicates
// function dup(arr) {
//   return arr.map(str => {
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== str[i + 1]) {
//         result += str[i];
//       }
//     }
//     return result;
//   });
// }

// console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]));





// function catAndMouse(moves, map) {
//   // Find the positions of cat and mouse
//   let catPosition, mousePosition;
//   for (let i = 0; i < map.length; i++) {
//     const row = map[i];
//     const catIndex = row.indexOf('C');
//     const mouseIndex = row.indexOf('m');

//     if (catIndex !== -1) {
//       catPosition = { row: i, col: catIndex };
//     }

//     if (mouseIndex !== -1) {
//       mousePosition = { row: i, col: mouseIndex };
//     }
//   }

//   // Check if both cat and mouse are present
//   if (!catPosition || !mousePosition) {
//     return "boring without two animals";
//   }

//   // Calculate the distance between cat and mouse
//   const distance = Math.abs(catPosition.row - mousePosition.row) + Math.abs(catPosition.col - mousePosition.col);

//   // Check if the cat can catch the mouse
//   if (distance <= moves) {
//     return "Caught!";
//   } else {
//     return "Escaped!";
//   }
// }


// function capitalize(s) {
//   let result = "";

//   for (let i = 0; i < s.length; i++) {
//     if (i % 2 === 0) {
//       result += s[i].toUpperCase();
//     } else {
//       result += s[i];
//     }
//   }

//   return result;
// }

// // console.log(capitalize("codewars"));


// multiplicationTable = function(size) {
  
  
// }


// let arr=[1,23,4,5,6]
// arr.flat(3)
// console.log(arr);

// function digitalRoot(n) {
//   // let newarr =Array.from(n)
//   // let result =newarr.reduce(function(sum,current){
//   //   return sum+current
//   // },0)
//   // console.log(result)


//   let newArr=n.toString().split('').map((elem)=>Number(elem)).reduce((acc,el)=>acc+el)
//   let fixedArr=newArr.toString().split('').map((elem)=>Number(elem)).reduce((acc,el)=>acc+el)

//   return fixedArr2

// }
// console.log(digitalRoot(168))


// function digitalRoot(n) {
//   if (n < 10) {
//     return n;
//   }

//   const digits = String(n).split('').map(Number);

//   const sum = digits.reduce((acc, digit) => acc + digit, 0);

//   return digitalRoot(sum);
// }

// console.log(digitalRoot(942))


// function findSenior(list) {
// }


// function duplicateEncode(word) {
//   const inputStrLower = inputStr.toLowerCase();

//   let word = "";

//   for (const char of inputStrLower) {
//       const count = inputStrLower.split(char).length - 1;

//       if (count === 1) {
//           word += "(";
//       } else {
//           word += ")";
//       }
//   }

//   return word;
// }

// String.prototype.camelCase = function() {
//   const words = this.split(/\s+/);

//   const camelCaseStr = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

//   return camelCaseStr;
// };
// function count(string) {
//   const charCount = {};

//   for (const char of string) {
//       charCount[char] = (charCount[char] || 0) + 1;
//   }

//   return charCount;
// }
// function  count (string){
//   const MainCount ={}
//   for(let i of string){
//     MainCount[i]=(MainCount[i] || 0)+1
//   }
//   return MainCount
// }



// multiplicationTable = function(size) {
//   let allArr = []
//  for(let i = 1;i<=size; i++ ){ 
//    let arr = []
//    for(let b = 1; b<= size;b++){
//      arr.push(i*b)
//  }
//    allArr.push(arr)
// }
//   return allArr
// }


// function integrate(coefficient, exponent) {
//   const newCoefficient = Math.floor(coefficient / (exponent + 1));
//   const newExponent = exponent + 1;

//   if (newCoefficient === 1) {
//       if (newExponent === 1) {
//           return "x";
//       } else {
//           return `x^${newExponent}`;
//       }
//   } else {
//       if (newExponent === 1) {
//           return `${newCoefficient}x`;
//       } else {
//           return `${newCoefficient}x^${newExponent}`;
//       }
//   }
// }

// function XO(str) {
//   let ss=str.toLowerCase()
//   for(let i=0;i<ss.length;i++){
//     if(ss['x']>){}
//   }
// }


// function squareDigits(num){
  
  
//   return 0;
// }


// function yearsAgoOrFuture(fatherAge, sonAge) {
//   const ageDifference = fatherAge - 2 * sonAge;
//   const result = Math.abs(ageDifference);

//   return result;
// }


const obj = {
  key1: {
    key1: {
      key1: "WORD 1"
    },
    key2: {
      key1: {
        key1: [

        ],
        key2: {
          key1: "WORD 2"
        }
      }
    }
  },
  key2: {
    key1: {
      key1: "WORD 3"
    },
    key2: {

    },
    key3: {
      key1: {
        key1: {
          key1: {
            key1: {
              key1: "WORD 4"
            },
            key2: {
              key1: {
                key1: "WORD 5"
              }
            }
          }
        }
      }
    }
  }
}

function rec(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && typeof obj[key]=== null) {
      rec(obj[key])
    } else if (typeof obj[key] !== 'object') {
      console.log(obj[key])
    }
  }
}

rec(obj);

function fn(obj) {
  const values = []

  function extract(arg) {
    for(const key in arg) {
      if(arg.hasOwnProperty(key)) {
        const isValideType = typeof arg[key] === "object" && arg[key] !== null
        if(isValideType) {
          extract(arg)
        } else {
          values.push(arg[key])
        }
      }
    }
  }

  extract(obj)
  return values
}

console.log(fn(obj))