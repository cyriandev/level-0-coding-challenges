// Task 0.9

function vowels(word) {

    word = word.toLowerCase();
    var m = word.match(/[aeiou]/gi);

    var unique = [];

    m.forEach(letter => {
        if (!unique.includes(letter)) {
            unique.push(letter);
        }

    });

    return `Vowels: ${unique}`;
}

console.log(vowels("Umuzi"));
