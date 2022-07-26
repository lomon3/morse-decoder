const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {
    let res = [];
    let arrayOfWords = expr.match(/.{1,10}/g);
    arrayOfWords.forEach(function(word) {
        let a = (Array.from(word));
        while (a.length > 0 && Number(a[0]) === 0) {
            a.shift();
        }
        if (word == "**********") {
            res.push(" ");
            return;
        }
        let letterMorse = [];
        while (a.length > 0) {
            letterMorse.push(a.splice(0, 2).join("") === "10" ? "." : "-");
        }

        res.push(MORSE_TABLE[letterMorse.join("")]);
    });
    return res.join("");
}

module.exports = {
    decode
}