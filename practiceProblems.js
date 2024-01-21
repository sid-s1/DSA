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

