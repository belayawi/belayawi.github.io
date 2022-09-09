function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

function isVowel(c) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(c)) {
    return true;
  }
  return false;
}
function sum(array) {
  let result = 0;
  for (var a of array) {
    result += a;
  }
  return result;
}
function multiply(array) {
  let result = 1;
  for (var a of array) {
    result *= a;
  }
  return result;
}

function reverse(s) {
  return s.split('').reverse().join('');
}
function findLongestWord(array) {
  var longest = array[0].length;
  for (var longer of array) {
    if (longer.length > longest) {
      longest = longer.length;
    }
  }
  return longest;
}

function filterLongWords(array, i) {
  let result = [];
  for (var longer of array) {
    if (longer.length > i) {
      result.push(longer);
    }
  }
  return result;
}
const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
  return elem + 3;
});

const c = a.filter(function (elem, i, array) {
  return elem !== 3;
});

const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue + elem;
});

function multiplyElementBy10(a) {
  const result = a.map((x) => x * 10);
  return result;
}

function allElementsEqualTo3(a) {
  const result = a.filter((y) => y === 3);
  return result;
}
function reduceElements(a) {
  return a.reduce((a, b) => a * b, 1);
}

// unit testing function
function myFunctionTest(expected, found) {
  if (Array.isArray(expected) && Array.isArray(found)) {
    if (arrayEquals(expected, found)) {
      return 'TEST SUCCEEDED';
    }
  } else if (expected === found) {
    return 'TEST SUCCEEDED';
  } else {
    return 'TEST FAILED.  Expected ' + expected + ' found ' + found;
  }
}

function arrayEquals(a, b) {
  return (a.length === b.length) && (a.every((val, index) => val == b[index]));
}

const d2 = a.find(function (elem) {
  return elem > 1;
}); //3
const d3 = a.findIndex(function (elem) {
  return elem > 1;
}); //1

console.log('Expected output of max(5,4) is 5 ' + myFunctionTest(5, max(5, 4)));
console.log(
  'Expected output of max(-9,0) is 0 ' + myFunctionTest(0, max(-9, 0))
);

console.log(
  'Expected output of maxOfThree(3,5,10) is 10 ' +
    myFunctionTest(10, maxOfThree(3, 5, 10))
);
console.log(
  'Expected output of maxOfThree(-5,-20,-1.5) is -1.5 ' +
    myFunctionTest(-1.5, maxOfThree(-5, -20, -1.5))
);

console.log(
  "Expected output of isVowel('a') is true    " +
    myFunctionTest(true, isVowel('a'))
);
console.log(
  "Expected output of isVowel('b') is false   " +
    myFunctionTest(false, isVowel('b'))
);
console.log(
  "Expected output of isVowel('u') is true    " +
    myFunctionTest(true, isVowel('u'))
);

const array = [6, 7, 8, 9, 12];
console.log(
  'Expected output of sum([6, 7, 8, 9, 12]) is 42    ' + myFunctionTest(42, sum(array))
);
console.log(
  'Expected output of multiply([6, 7, 8, 9, 12]) is 36288    ' +
    myFunctionTest(36288, multiply(array))
);

console.log(
  'Expected output of reverse("Hello World") is \'dlroW olleH\'   ' +
    myFunctionTest('dlroW olleH', reverse('Hello World'))
);
console.log(
  'Expected output of reverse("Good job man") is \'nam boj dooG\' ' +
    myFunctionTest('nam boj dooG', reverse('Good job man'))
);

const names = ['banana', 'lemon', 'egg', 'strawberry', 'maize', 'beautiful'];
console.log(
  'Expected output of findLongestWord( [\'banana\'', 'lemon\'', 'egg\'', 'strawberry\'', 'maize\'', 'beautiful\']) is 10    \'' +
    myFunctionTest(10, findLongestWord(names))
);
console.log(
  "Expected output of filterLongWords( [\'banana\'', 'lemon\'', 'egg\'', 'strawberry\'', 'maize\'', 'beautiful\'],8) is 'strawberry', 'beautiful')  " +
    myFunctionTest(['strawberry', 'beautiful'], filterLongWords(names, 8))
);

console.log(
  'Expected output of multiplyElementBy10([1, 3, 5, 3, 3]) is 10, 30, 50, 30, 30    ' +
    myFunctionTest([10, 30, 50, 30, 30], multiplyElementBy10(a))
);
console.log(
  'Expected output of allElementsEqualTo3([1, 3, 5, 3, 3]) is 3,3,3     ' +
    myFunctionTest([3, 3, 3], allElementsEqualTo3(a))
);
console.log(
  'Expected output of reduceElements([1, 3, 5, 3, 3]) is 135    ' +
    myFunctionTest(135, reduceElements(a))
);


