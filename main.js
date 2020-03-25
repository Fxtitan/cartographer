/******************
 * YOUR CODE HERE *
 ******************/
// This is my helper function.
 const triple = (num) => {
  return num * 3;
}

const tripleAll = (nums) => {
  return nums.map(triple);
}

const getNegativeValue = (number) => {
   return Math.abs(number) * -1 + Math.sign(0); //It returns 1 if the argument passed is a positive number.
  // It returns -1 if the argument passed is a negative number.
  // It returns 0 if the argument passed is a positive zero.
  // It returns -0 if the argument passed is a negative zero.
  // If none of the above cases match,it returns Nan.
}

const negativeValues = (numbers) => {
return numbers.map(getNegativeValue);
}

const makeQuestion = (str) => {
return str += '?';
}

const questionings = (string) => {
  return string.map(makeQuestion);
}

const getInitials = (initials) => {
return initials.charAt(0) 
}

const doubleIfEven = (thisNum) => {
  if (thisNum % 2 === 0){
    return thisNum * 2
  } else {
    return thisNum
  }
}

const doubleEven = (thoseNums) => {
  return thoseNums.map(doubleIfEven);
};

/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof getNegativeValue === 'undefined') {
  getNegativeValue = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof makeQuestion === 'undefined') {
  makeQuestion = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleIfEven === 'undefined') {
  doubleIfEven = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof changeToTitleCase === 'undefined') {
  changeToTitleCase = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleIfOddIndexed === 'undefined') {
  doubleIfOddIndexed = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  triple,
  tripleAll,
  getNegativeValue,
  negativeValues,
  makeQuestion,
  questionings,
  getInitials,
  changeToInitials,
  doubleIfEven,
  doubleEven,
  changeToTitleCase,
  titleCaseNames,
  doubleIfOddIndexed,
  doubleEveryOther,
}
