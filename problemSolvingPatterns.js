// Frequency Counters pattern
// Anytime you are comparing pieces of data - two or more inputs and frequencies of certain things occuring - using this pattern/mechanism will help reduce O(N^2) to O(N)
// Using an object to construct a profile - a way of breaking down the contents of an array or a string, and then you can compare that breakdown to how another profile looks

// [1,2,3] = [4,1,9] TRUE
// [1,2,3] = [1,9] FALSE
// [1,2,1] = [4,4,1]

const same = (arr1, arr2) => {
    // boolean that changes to false if condition not met for any case
    let similarityMetric = true;
    let elementsFound = 0;
    // either array or both arrays empty




    // elements in either or both arrays not numeric



    // if both above tests pass, check each element in the first array against each element in the second array
    // most basic way to do it would be to use nested loops
    // for (const element of arr1) {
    //     for (const squaredElement of arr2) {
    //         if (element * element === squaredElement) {
    //             similarityMetric = true;
    //             elementsFound++;
    //             break;
    //         }
    //         else {
    //             similarityMetric = false;
    //         }
    //     }
    // }
    // if (elementsFound === arr1.length && similarityMetric) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    const obj1 = frequencyOfElements(arr1);
    const obj2 = frequencyOfElements(arr2);
    for (const element of arr1) {
        if (obj2[element * element] !== obj1[element]) {
            return false;
        }
    }
    return true;
};

const frequencyOfElements = (arr) => {
    const obj = {};
    for (const element of arr) {
        obj[element] = ++obj[element] || 1;
    }
    return obj;
};

// extra method for checking numeric or not
const checkNumeric = (num) => {
    // logic to test if num is numeric input; return false if not  
};

// console.log(same([1, 2, 3], [9, 1]))


const validAnagram = (str1, str2) => {
    const obj1 = frequencyOfElements(str1.split(''));
    const obj2 = frequencyOfElements(str2.split(''));
    for (const letter of str1) {
        if (obj1[letter] !== obj2[letter]) {
            return false;
        }
    }
    return true;
};

// console.log(validAnagram("", ""))
// console.log(validAnagram("aaz", "zza"))
// console.log(validAnagram("anagram", "nagaram"))
// console.log(validAnagram("rat", "car"))
// console.log(validAnagram("qwerty", "qeywrt"))

// ----------------------------------------------------------------------------------------

// Multiple pointers pattern


const sumZero = (arr) => {
    let startPointer = 0;
    let endPointer = arr.length - 1;
    while (startPointer < endPointer) {
        if (arr[startPointer] + arr[endPointer] === 0) {
            return [arr[startPointer], arr[endPointer]];
        }
        else if ((arr[startPointer] + arr[endPointer]) > 0) {
            endPointer--;
        }
        else {
            startPointer++;
        }
    }
    return false;
};

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

const countUniqueValues = (arr) => {
    let startPointer = 0;
    let secondPointer = 1;
    let frequency = 1;
    while (secondPointer < arr.length) {
        if (arr[secondPointer] === arr[startPointer]) {
            secondPointer++;
        }
        else {
            frequency++;
            startPointer = secondPointer;
            secondPointer += 1;
        }
    }
    if (arr.length !== 0) {
        return frequency;
    }
    return 0;
};

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));


// -----------------------------------------------------------------------------------
// Sliding Window Pattern
// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.
// Say, you have an array and a num. The num asks you what the highest sum of that many consecutive digits is in an array. [1,2,3,4,5],3 - what's the highest sum that we can get combining 3 consecutive digits in that array? If you were to add 3 consecutive items again and again by moving from 0 to 1 to 2, it would be highly inefficient, especially when there are a high number of elements involved. Instead, you add the first 3 numbers, then for the next 3, you just subtract the first and add the 4th - so it's like a sliding window that keeps moving

const maxSubArraySum = (arr, num) => {
    let tempMax = 0;
    let max = 0;
    if (arr.length < num) {
        return null;
    }
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }
    tempMax = max;
    for (let i = num; i < arr.length; i++) {
        tempMax = tempMax - arr[i - num] + arr[i];
        max = Math.max(max, tempMax);
    }
    return max;
};

// console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));


// ----------------------------------------------------------------------------------------

// Divide and Conquer Pattern
// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
// This pattern can tremendously decrease time complexity
// example - binary search

const search = (arr, num) => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        const middle = Math.floor((min + max) / 2);
        const currentElement = arr[middle];

        if (currentElement < num) {
            min = middle + 1;
        }
        else if (currentElement > num) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
};

console.log(search([1, 2, 4, 7, 133, 345, 670], 6));
console.log(search([1, 2, 4, 7, 133, 345, 670], 7));
