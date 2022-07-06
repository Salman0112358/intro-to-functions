/*
test cases:
===========
longestInList(["England", "Wales", "Scotland", "Northern Ireland"]) should be "Northern Ireland"
longestInList(["the", "quick", "brown", "fox"]) should be "quick"
longestInList(["hello", "hi", "greetings", "hey"]) should be "greetings"
*/

/**
 *
 * @param {Array} stringArray
 * @return {string}
 */
function longestInList(stringArray) {
  let longestWord = '';

  for (const word of stringArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(
    longestInList(['England', 'Wales', 'Scotland', 'Northern Ireland']),
    'should be Northern Ireland',
);
console.log(longestInList(['the', 'quick', 'brown', 'fox']), 'should be quick');
console.log(
    longestInList(['hello', 'hi', 'greetings', 'hey']),
    'should be greetings',
);
