// 1. Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array (by index) or object (by key) is constant
// 4. In a loop, the time complexity is the length of the loop times the complexity of whatever happens inside of the loop

// For space complexity, we have to focus on the space taken by the algorithm (auxillary space), and NOT the space taken by inputs
// Meaning, for each variable assignment, you would consider it as O(1) - even though variable could grow upto be a million, the point is that it's being stored in a single variable occupying a constant amount of space. An array, that increase in size however, as 'n' grows, would have O(N) space complexity

// The time or space complexity (As measured by Big O), depends only on the algorithm, not the hardware used to run the algorithm. Big O notation doesn't care about precision, only about general trends (linear? quadratic? constant?)

// Objects are unordered data structures. Extremely quick to insert stuff (O(1)), remove stuff (O(1)), search stuff - where a given value is - (O(N)), access stuff (O(1))
// Object methods - Object.keys, Object.values, Object.entries - all O(N) time
// Object method - objName.hasOwnProperty("keyName") - O(1) - because it's same as accessing a key which is also O(1)

// Arrays are ordered data structures. Searching - O(N). Accessing - O(1)
// Inserting at the end of the array is constant time - O(1) - because we are just adding an index at the end of the array - simple, like for objects. BUT, issue is when we have to insert at the start of the array - because doing that, messes up the indices completely - O(N) - because the amount of time it takes to reorder elements, roughly grows in proportion to the size of 'n' - same is true for removing from the beginning of the array - HENCE, 'push' and 'pop' always faster than 'shift' and 'unshift'

// For an array method like 'concat', you'd think that the time complexity would be O(N + M), but it's just O(N) because all we are implying with this time complexity is that as the arrays that you are merging grow, so is the time that it takes to merge them