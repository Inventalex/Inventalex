const translationMap = {
    "A": "+",
    "Á": "×",
    "a": "]",
    "á": ")",
    "B": "(",
    "b": "[",
    "C": "!",
    "c": "@",
    "D": "÷",
    "d": ">",
    "E": "<",
    "e": "=",
    "É": "/",
    "é": "_",
    "F": "#",
    "f": "$",
    "G": "%",
    "g": "^",
    "H": "&",
    "h": "*",
    "I": "?",
    "i": "p",
    "Í": "q",
    "í": "e",
    "J": "\"",
    "j": "'",
    "K": "-",
    "k": "1",
    "L": "0",
    "l": "9",
    "M": "8",
    "m": "2",
    "N": "3",
    "n": "5",
    "Ñ": "3",
    "ñ": "4",
    "O": "7",
    "ó": "₩",
    "o": "¥",
    "P": "£",
    "p": "€",
    "Q": "}",
    "q": "{",
    "R": "\\",
    "r": "~",
    "S": "`",
    "s": "¿",
    "T": "¡",
    "t": ".",
    "U": ",",
    "u": "Q",
    "Ú": "O",
    "ú": "P",
    "V": "n",
    "v": "m",
    "ú": "P",
    "ú": "P",
    ";": "W",
    ":": "E",
    "/": "o",
    "_": "T",
    "-": "Y",
    "\\": "U",
    ".": "I",
    ",": "M",
    "+": "Z",
    "]": "X",
    "@": "C",
    "{": "N",
    "}": "B",
    "0": "V",
    "1": "A",
    "2": "D",
    "3": "H",
    "4": "G",
    "5": "F",
    "6": "S",
    "7": "J",
    "8": "Ñ",
    "9": "L",
    "!": "K",
    "?": "■"
};

const reverseTranslationMap = {};
for (const key in translationMap) {
    const value = translationMap[key];
    reverseTranslationMap[value] = key;
}

document.getElementById("translateToInvented").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const translatedText = translateToInvented(inputText);
    document.getElementById("outputText").textContent = translatedText;
});

document.getElementById("translateToSpanish").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const translatedText = translateToSpanish(inputText);
    document.getElementById("outputText").textContent = translatedText;
});

function translateToInvented(text) {
    return Array.from(text).map(char => translationMap[char] || char).join("");
}

function translateToSpanish(text) {
    return text.split("").map(char => reverseTranslationMap[char] || char).join("");
}
