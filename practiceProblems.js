const sameFrequency = (num1, num2) => {
    // make sure we get numbers as input
    const str1 = num1.toString();
    const str2 = num2.toString();

    // convert them to strings and check that their lengths match otherwise return false straightaway
    if (!(checkNumeric(str1) || checkNumeric(str2))) {
        return "Please enter valid values!";
    }
    else {
        if (str1.length !== str2.length) {
            return false;
        }
        else {
            const obj1 = calcFrequency(str1);
            const obj2 = calcFrequency(str2);
            for (const digit of str1) {
                if (obj2[digit] !== obj1[digit]) {
                    return false;
                }
            }
            return true;
        }
    }

    // logic to check if frequencies of digits match completely
};

const calcFrequency = (str) => {
    const obj = {};
    for (const character of str) {
        obj[character] = ++obj[character] || 1;
    }
    return obj;
};

const checkNumeric = (str) => {
    return /^\d+$/.test(str);
};

// console.log(sameFrequency(182, 281));
// // try to find 1 in 281 - found; continue. try to find 8, found, continue; same with last. reached the end, so return true
// console.log(sameFrequency(34, 14));
// // try to find 3 in 14 - could not find; straight away return false
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));
// length does not match; straight away return false

const areThereDuplicates = (...inputs) => {
    // check to ensure atleast two inputs are passed otherwise print error message
    if (inputs.length < 2) {
        return "Please enter a valid set of values to check duplicates!";
    }
    else {
        let firstPointer = 0;
        let secondPointer = 1;
        while (firstPointer < secondPointer) {
            if (inputs[secondPointer] === inputs[firstPointer]) {
                return true;
            }
            else {
                // return !(new Set(inputs).size === inputs.length);
                if (secondPointer === inputs.length - 1) {
                    if (firstPointer !== inputs.length - 2) {
                        firstPointer++;
                        secondPointer = firstPointer + 1;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    secondPointer++;
                }
            }
        }
    }

    // could get any input - numbers, characters, strings of numbers/characters, or a mixture of the two

    // wont need to break down longer strings because we can check equality by === operator directly 
};

// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates('a', 'b', 'c', 'a'));
// console.log(areThereDuplicates());

const averagePair = (arr, num) => {
    // check to ensure array and num are both not null values

    // have a start pointer at the start, and an end pointer at the end
    // if average of them is more than what we need, reduce the end pointer by one
    // until either the average is found, or we reach a value lower than the desired average in which case we return false if the start pointer has crossed the end pointer, or move on to the next pointer

    let startPointer = 0;
    let endPointer = arr.length - 1;

    while (startPointer < endPointer) {
        const desiredAverage = (arr[startPointer] + arr[endPointer]) / 2;
        if (desiredAverage === num) {
            return true;
        }
        else if (desiredAverage > num) {
            endPointer--;
        }
        else {
            startPointer++;
        }
    }
    return false;
};




// console.log(averagePair([1, 2, 3], 2.5)) // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
// console.log(averagePair([], 4)) // false



const isSubsequence = (toFind, target) => {
    let targetArr = target.split("");
    let startPointer = 0;
    let result = "";
    for (const index in toFind) {
        const resultIndex = targetArr.indexOf(toFind[index], startPointer);
        if (resultIndex !== -1) {
            startPointer = resultIndex + 1;
            if (index <= startPointer) {
                result += toFind[index];
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    if (result === toFind) {
        return true;
    }
    return false;


    // Alternative soln
    // let i = 0, j = 0;
    // while (j < str2.length) {
    //     if (str[i] === str[j]) {
    //         i++;
    //     }
    //     if (i === str1.length) {
    //         return true;
    //     }
    //     j++;
    // }
    // return false;
};


// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// // 
// console.log(isSubsequence('abc', 'acb')); // false (order matters)
// console.log(isSubsequence('abcdea', 'abceda')); // false (order matters)


// we get an array of numbers in the input, along with another number
// this second number specifies the number of consecutive digits we have to sum
// then while summing each possible combination, we have to compare it to the max value and find the new max
// example - [100,200,300,400,500] , 2 -> 400+500 will be the max
// example - [100,3,4,5,600] , 3 -> try 100+3+4 -> then -100 +5 -> then -3 +600

const maxSubArraySum = (arr, num) => {
    if (num > arr.length) {
        return "Incorrect array length or number of digits to sum!";
    }
    let maxSum = -Infinity;
    let tempSum = 0;
    // for each element in arr, upto num, add elements
    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }
    // make that the max so far
    // then, for each element in array from num upto end of array, create new sums
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
    // create new sums by subtracting previous element and adding next element
    // check each time if the new sum is greater than max and store that - to later print
};

// console.log(maxSubArraySum([100, 200, 300, 400], 2));
// console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2));
// console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));

const minSubArrayLen = (arr, num) => {
    // one core boundary check
    for (const element of arr) {
        if (element < 0) {
            return 0;
        }
    }

    let digitsBeingAdded = 1;
    // need to perform check for length of array first
    // we already have the first element of the array stored in our summation variable
    // because it is not greater than or equal to the passed integer, we are at this stage now
    // here, we start with trying to add just two elements at a time
    // and keep checking after every addition if the summed value is greater than or equal to the passed integer
    // if it is not, we keep continuing through to the end of the array
    // if end of array is reached, and we still haven't reached a value greater than or equal to the passed integer, we up the number of elements being summed each time
    // this will need to have an end condition though
    // which could be digitsBeingAdded < arr.length

    while (digitsBeingAdded < arr.length) {
        let sumOfElements = 0;
        let resultArr = [];
        for (let i = 0; i < digitsBeingAdded; i++) {
            sumOfElements = sumOfElements + arr[i];
            resultArr.push(arr[i]);
        }
        for (let i = digitsBeingAdded; i < arr.length; i++) {
            sumOfElements = sumOfElements - arr[i - digitsBeingAdded] + arr[i];
            // console.log(sumOfElements);
            if (sumOfElements >= num) {
                resultArr.shift();
                resultArr.push(arr[digitsBeingAdded]);
                return resultArr.length;
            }
        }
        digitsBeingAdded++;
    }
    return 0;
};

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0

const findLongestSubstring = (str) => {
    let sum = "";
    let maxSum = "";
    let i = 0;
    while (i < str.length) {
        if (sum.includes(str[i]) === false) {
            sum += str[i];
            i++;
            if (sum.length > maxSum.length) {
                maxSum = sum;
            }
        }
        else {
            i = i - sum.length + 1;
            sum = "";
        }
    }
    return [maxSum, maxSum.length];
}
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));