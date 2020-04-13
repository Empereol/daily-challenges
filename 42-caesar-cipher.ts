/**
 * Daily Challenge #42 - Caesar Cipher
 * https://dev.to/thepracticaldev/daily-challenge-42-caesar-cipher-43k8
 */

const enum CharCode {
  A = 65,
  Z = 90,
  a = 97,
  z = 122
}

function cipher(input: string, shift: number): string {
  const shiftMod = shift % 26;

  return Array.from(input).reduce((ret, char) => {
    const charCode = char.charCodeAt(0);

    let updatedCode: number;
    if (charCode >= CharCode.A && charCode <= CharCode.Z && charCode + shiftMod > CharCode.Z) {
      updatedCode = CharCode.A + (CharCode.Z - charCode + shiftMod);
    } else if (
      charCode >= CharCode.a &&
      charCode <= CharCode.z &&
      charCode + shiftMod > CharCode.z
    ) {
      updatedCode = CharCode.a + (CharCode.z - charCode + shiftMod);
    } else if (
      charCode < CharCode.A ||
      (charCode > CharCode.Z && charCode < CharCode.a) ||
      charCode > CharCode.z
    ) {
      updatedCode = charCode;
    } else {
      updatedCode = charCode + shiftMod;
    }

    return (ret += String.fromCharCode(updatedCode));
  }, '');
}

console.log(cipher('Defend the east wall of the castle', 1));
