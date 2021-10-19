// Task 0.10

function common(word1, word2) {
    let match = [];

    for (let i in word1) {
        if (word2.includes(word1[i])) {
            !match.includes(word1[i]) ? match.push(word1[i]) : null
        }
    }

    return `Common letters: ${match}`;
}

console.log(common("house", "computers"));
