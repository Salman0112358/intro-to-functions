

/*
test cases:
===========
longestInList(["England", "Wales", "Scotland", "Northern Ireland"]) should be "Northern Ireland"
longestInList(["the", "quick", "brown", "fox"]) should be "quick"
longestInList(["hello", "hi", "greetings", "hey"]) should be "greetings"
*/

function longestInList(stringArray){

    let longestWord = ""

    for (let word of stringArray){

        if (word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord
}