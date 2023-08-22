const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    return expr
        .split("**********")
        .reduce(
            (phrase, wordBin) =>
                phrase +
                " " +
                wordBin
                    .split("")
                    .reduce(
                        (wordStr, num, i) => wordStr + ((i - 9) % 10 ? num : num + "|"),
                        ""
                    )
                    .slice(0, -1)
                    .split("|")
                    .map((el) =>
                        parseInt(el)
                            .toString()
                            .split("")
                            .reduce((a, b, index) => a + (index % 2 ? b + "|" : b), "")
                            .trim()
                            .split("|")
                            .reduce(
                                (a, b) => a + (b === "10" ? "." : b === "11" ? "-" : ""),
                                ""
                            )
                            .split(",")
                            .map((el) => MORSE_TABLE[el])
                            .join("")
                    )
                    .join(""),
            ""
        )
        .trim();
}

module.exports = {
    decode,
};