let securityArr = {
    letter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbol: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"],
    maximum: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]
}

const passwordField2 = document.getElementById("password1")
const passwordField1 = document.getElementById("password2")
const buttonGenerator = document.getElementById("button-el")

const numbersEl = document.getElementById("numbers-radio")
const lettersEl = document.getElementById("letters-radio")
const symbolsEl = document.getElementById("symbols-radio")
const securityEl = document.getElementById("security-radio")
const outputEl = document.getElementById("output")

let test1 = []
let test2 = []

function numbers() {
    securityTypeOutput = securityArr.number
}

function letters() {
    securityTypeOutput = securityArr.letter
}

function symbols() {
    securityTypeOutput = securityArr.symbol
}

function maximum() {
    securityTypeOutput = securityArr.maximum
}

buttonGenerator.addEventListener("click", function () {
    for (let i = 0; i < 15; i++) {
        const randomOne = Math.floor(Math.random() * securityTypeOutput.length)
        const randomTwo = Math.floor(Math.random() * securityTypeOutput.length)
        test1.push(securityTypeOutput[randomOne])
        test2.push(securityTypeOutput[randomTwo])
        passwordField1.textContent = test1
        passwordField2.textContent = test2
    }
    test1 = []
    test2 = []
})


