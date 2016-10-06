


function letterCapitalize(string) {
    var stringArray = string.split(" ");
    var sentence = stringArray.map(function(word) {
        var firstLetter = word[0];
        var otherLetters = word.slice(1);
        var capFirst = firstLetter.toUpperCase();
        return capFirst + otherLetters;
    })
    return sentence.join(" ");
}
console.log(letterCapitalize("i wish i was a little bit taller"));

Array.prototype.count = function() {
	return this.length;
};


function wordCount(string) {
    var stringArray = string.split(" ");
    return stringArray.count();
}

console.log(wordCount("So you want to be starting something"));

