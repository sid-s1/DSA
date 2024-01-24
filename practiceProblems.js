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




console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
// 
console.log(isSubsequence('abc', 'acb')); // false (order matters)
console.log(isSubsequence('abcdea', 'abceda')); // false (order matters)