import assert from 'assert';

/*
Given an array, create a function that finds the most frequent element.
If multiple elements occur the same number of times, any of them can be returned.
*/

function mostFrequentElement/* generic type */(/* parameters */): /* return type */ {

}

// Tests

const numbers = [3, 5, 2, 5, 3, 4, 1, 5];
const strings = ['apple', 'banana', 'apple', 'orange', 'apple'];
const mixed = [1, 'hello', 2, 'world', 1];

assert.equal(mostFrequentElement(numbers), 5); // 5
assert.equal(mostFrequentElement(strings), 'apple'); // apple
assert.equal(mostFrequentElement(mixed), 1); // 1

const emptyArray: number[] = [];
assert.equal(mostFrequentElement(emptyArray), undefined); // undefined

const arrayWithMultipleMostFrequent: number[] = [1, 2, 3, 1, 2, 3, 4];
assert.equal(mostFrequentElement(arrayWithMultipleMostFrequent) === 1 ||
    mostFrequentElement(arrayWithMultipleMostFrequent) === 2 ||
    mostFrequentElement(arrayWithMultipleMostFrequent) === 3, true); // 1 or 2 or 3