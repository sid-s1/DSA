// Helper method recursion - a design matter used for recursion
function outer(input) {
    const outerscopedvariable = [];

    function helper(helperinput) {
        helper(helperinput--);
    }

    helper(input)

    return outerscopedvariable;
}

const collectOddValues = (arr) => {
    let result = [];

    const helper = (helperInput) => {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);
    return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// If you want to go at it using pure recursion, use array helper methods like slice, spread, concat that make copies of arrays so you do not mutate them; for strings, use slice, substring; for objects, use Object.assign or the spread operator

const power = (base, exponent) => {
    if (exponent <= 0) return 1;
    exponent = exponent - 1;
    return base * power(base, exponent);
};

console.log(power(2, 4));

const factorial = (num) => {
    if (num <= 0) return 1
    return num * factorial(num - 1);
};

const productOfArray = (arr) => {
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1));
};

const recursiveRange = (num) => {
    if (num <= 0) return 0;
    return num + recursiveRange(num - 1);
};

const fib = (num) => {
    if (num <= 1) {
        return num;
    }
    return fib(num - 1) + fib(num - 2);
};