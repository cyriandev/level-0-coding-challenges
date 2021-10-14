// Task 0.10

function common(word1, word2) {
    var match = [];

    for (var i in word1) {
        if (word2.includes(word1[i])) {
            !match.includes(word1[i]) ? match.push(word1[i]) : null
        }
    }

    return `Common letters: ${match}`;
}

console.log(common("house", "computers"));
