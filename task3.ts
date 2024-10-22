import assert from 'assert';

/* 
Create a TypeScript function that determines whether two strings are anagrams of each other.
An anagram is two words that consist of the same letters, but in a different order. 
Ignore case differences and spaces. 
*/

function isAnagram/* generic type */(word1: string, word2: string): boolean {

    const letters1 = word1.toLowerCase().split("").filter(l => (l.charCodeAt(0) >= 97 && l.charCodeAt(0) <= 122));
    const letters2 = word2.toLowerCase().split("").filter(l => (l.charCodeAt(0) >= 97 && l.charCodeAt(0) <= 122));
    let result = true;

    console.log("letters1:");
    console.log(letters1);
    console.log("letters2:");
    console.log(letters2);
    
    
    let catalugue = new Map();
    letters1.forEach(l => {
        let occurence = catalugue.get(l);
        if(occurence === undefined){
            catalugue.set(l, 1);
        } else {
            catalugue.set(l, occurence + 1);
        }
    });

    console.log("catalogue before: ");
    console.log(catalugue);
    
    letters2.forEach(l => {
        let occurence = catalugue.get(l);
        if(occurence === 0 || occurence === undefined){
            console.log(`Letter: ${l}, occurence: ${occurence}, setting result to false.`);
            result = false;
        } else {
            catalugue.set(l, occurence - 1);
        }
    });
    console.log("catalogue after: ");
    console.log(catalugue);

    catalugue.forEach((value) => {
        console.log("value: " + value);
        if(value !== 0) {
            console.log(`Value: ${value}, setting result to false.`);
            result = false;
        }
    });


    return result;
}

// Tests

assert.equal(isAnagram("listen", "silent"), true); // true
assert.equal(isAnagram("hello", "world"), false); // false
//assert.equal(isAnagram("A man, a plan, a canal: Panama!", "Panama: a canal, a plan, a man, A"), true); // true
assert.equal(isAnagram("dormitory", "dirty room"), true); // true
//assert.equal(isAnagram("anagram", "margana"), false); // false
assert.equal(isAnagram("cinema", "iceman"), true); // true
assert.equal(isAnagram("foo", "bar"), false); // false
assert.equal(isAnagram("", ""), true); // true
assert.equal(isAnagram("a", "aa"), false); // false
assert.equal(isAnagram("a ", "a"), true); // true