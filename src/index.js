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
   let morseArr = expr.split("")

    while (morseArr[0]==="0") morseArr.shift()
    while(morseArr[morseArr.length-1] === "0") morseArr.pop()

    let stringExpr = morseArr.join('')

    if (stringExpr.indexOf('0') <0) return '.'

    for (let i = 1; ; i++){
        if(stringExpr.indexOf(`1${"0".repeat(i)}1`) >= 0 ||
            stringExpr.indexOf(`${"1".repeat(i+i)}`) <0) {
            stringExpr = stringExpr.replace(new RegExp(`0(${i)}`,'g'),'0')
                .replace(newRegExp(`1{${i}}`, 'g'), '1')
            break
        }
    }




}

module.exports = {
    decode
}