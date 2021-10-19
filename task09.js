// Task 0.9

function vowels(word) {

    word = word.toLowerCase();
    const matches = word.match(/[aeiou]/gi);

    let unique = [];

    matches.forEach(letter => {
        if (!unique.includes(letter)) {
            unique.push(letter);
        }

    });

    return `Vowels: ${unique}`;
}

console.log(vowels("Umuzi"));
