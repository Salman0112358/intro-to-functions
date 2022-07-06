/*
Write a function that, given a full message and a list of words, returns a single string that represents a 'censored' version of the original message: all words from the list must be scrubbed out and replaced with five asterisks (*****).

The censor must scrub out matches that are case insensitive.

You may assume that each string in the list is a lowercase single word.
You may assume that there is no punctuation apart from spaces in the full message.

test cases:
===========
censorMessage("don't mess with cats", ["mess"]) should be "don't ***** with cats"
censorMessage("Are you sure that this is safe", ["are", "is"]) should be "***** you sure that this ***** safe"
censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]) should be "I CANNOT ***** *****"
*/

/**
 *
 * @param {string} sentence
 * @param {array} scrubbedWords
 * @return {string}
 */
function censorMessage(sentence, scrubbedWords) {
  const splitWords = sentence.split(' ');
  let scrubbedstring = '';

  for (const word of splitWords) {
    if (word.toLowerCase().includes(scrubbedWords)) {
      scrubbedstring += `***** `;
    } else {
      scrubbedstring += `${word} `;
    }
  }
  // console.log(scrubbedstring)
  return scrubbedstring;
}

console.log(
    censorMessage('don\'t mess with cats', ['mess']),
    'should be don\'t ***** with cats',
);
console.log(
    censorMessage('Are you sure that this is safe', ['are', 'is']),
    'should be ***** you sure that this ***** safe',
);
console.log(
    censorMessage('I CANNOT HELP YOU', ['can', 'not', 'help', 'you']),
    'should be I CANNOT ***** *****',
);
