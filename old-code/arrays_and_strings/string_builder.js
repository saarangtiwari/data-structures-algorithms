// words -> array of word | separator between the words
function joinWords(words, separator) {
    if(!words instanceof Array) return words;

    let mergedWords = "";
    if(separator == null) {
        separator = " ";
    }

    for( let i = 0; i < words.length; i++ ) {
        const word = i == words.length || i == 0? words[i] : separator + words[i];
        mergedWords += word;
    }

    return mergedWords;
}


console.log(joinWords(['a','b','c','d'], ','));
console.log(joinWords('ad'));
