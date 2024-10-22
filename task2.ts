import assert from 'assert';

/*
Given an array, create a function that finds the most frequent element.
If multiple elements occur the same number of times, any of them can be returned.
*/

function mostFrequentElement<Type>(input: Type[]): Type | undefined {
    let counter = new Map< Type, number>();

    input.forEach(item => {
        let occurence = counter.get(item);
        if(occurence === undefined){
            counter.set(item, 1);
        } else {
            counter.set(item, occurence + 1);
        }
    });
    //console.log(counter);
    
    let goal: number = 0;
    let result = null;

    counter.forEach((value, key) => {
        if(value > goal){
            goal = value;
            result = key;
        }
    });

    if(result !== null){
        return result;
    } else {
        return undefined;
    }
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