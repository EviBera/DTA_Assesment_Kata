import assert from 'assert';

/* 
Create a TypeScript function that determines whether two strings are anagrams of each other.
An anagram is two words that consist of the same letters, but in a different order. 
Ignore case differences and spaces. 
*/

function isAnagram/* generic type */(/* parameters */): /* return type */ {

}

// Tests

assert.equal(isAnagram("listen", "silent"), true); // true
assert.equal(isAnagram("hello", "world"), false); // false
assert.equal(isAnagram("A man, a plan, a canal: Panama!", "Panama: a canal, a plan, a man, A"), true); // true
assert.equal(isAnagram("dormitory", "dirty room"), true); // true
assert.equal(isAnagram("anagram", "margana"), false); // false
assert.equal(isAnagram("cinema", "iceman"), true); // true
assert.equal(isAnagram("foo", "bar"), false); // false
assert.equal(isAnagram("", ""), true); // true
assert.equal(isAnagram("a", "aa"), false); // false
assert.equal(isAnagram("a ", "a"), true); // true