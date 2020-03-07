/**
 * Daily Challenge #23 - Morse Code Decoder
 * https://dev.to/thepracticaldev/daily-challenge-23-morse-code-decoder-1b8m
 *
 * Your task is to implement a function that would take the Morse code as input
 * and return a decoded human-readable string.
 *
 * For example:
 * decodeMorse('.... . -.-- .--- ..- -.. .')
 * should return "HEY JUDE"
 */

enum MorseCodeAlphabet {
  ".-" = "A",
  "-..." = "B",
  "-.-." = "C",
  "-.." = "D",
  "." = "E",
  "..-." = "F",
  "--." = "G",
  "...." = "H",
  ".." = "I",
  ".---" = "J",
  "-.-" = "K",
  ".-.." = "L",
  "--" = "M",
  "-." = "N",
  "---" = "O",
  ".--." = "P",
  "--.-" = "Q",
  ".-." = "R",
  "..." = "S",
  "-" = "T",
  "..-" = "U",
  "...-" = "V",
  ".--" = "W",
  "-..-" = "X",
  "-.--" = "Y",
  "--.." = "Z",
  "-----" = "0",
  ".----" = "1",
  "..---" = "2",
  "...--" = "3",
  "....-" = "4",
  "....." = "5",
  "-...." = "6",
  "--..." = "7",
  "---.." = "8",
  "----." = "9"
}

function decodeMorse(morse: string): string {
  return morse
    .split(" ")
    .map(code => MorseCodeAlphabet[code] || "�")
    .join("");
}

console.log(decodeMorse(".... . -.-- .--- ..- -.. ."));
