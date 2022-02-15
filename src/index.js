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
    ' ': ' '
};

function decode(expr) {
    let newSrting = '';
    for (let i = 0; i < expr.length - 1; i = i + 10) {
        let str = expr.substring(i, i + 10);
        let arr = str.split('')
        const arrMap = arr.map((item, i) => {
            let prom = ''
            if (i % 2 === 0 && arr[i] + arr[i + 1] === '10') {
                return prom = prom + '.'
            } else if (i % 2 === 0 && arr[i] + arr[i + 1] === '11') {
                return prom = prom + '-'
            } else if (arr[i] + arr[i + 9] === '**') {
                return prom = prom + ' '
            }
            return prom
        })
        let exp = arrMap.join('')
        let result = MORSE_TABLE[exp]
        newSrting = newSrting + result
    }
    return newSrting;
}

module.exports = {
    decode
}