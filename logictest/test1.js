let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut : 
// b
// be
// bee
// beev
// beeve
// beever

const wordPattern = (words) => {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        result.push(words.slice(0, i + 1));
    }
    result.forEach(word => {
        console.log(word);
    })
}

wordPattern(words);