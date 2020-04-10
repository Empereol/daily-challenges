/*
 * Daily Challenge #222 - Parse Bank Account Numbers
 * https://dev.to/thepracticaldev/daily-challenge-222-parse-bank-account-numbers-439n
 *      _  _     _  _  _  _  _
 *   | _| _||_||_ |_   ||_||_|
 *   ||_  _|  | _||_|  ||_| _|
 */

const DigitsDictionary: Record<string, number> = {
  ' _ | | _ ': 0,
  '     |  |': 1,
  ' _  _||_ ': 2,
  ' _  _| _|': 3,
  '   |_|  |': 4,
  ' _ |_  _|': 5,
  ' _ |_ |_|': 6,
  ' _   |  |': 7,
  ' _ |_||_|': 8,
  ' _ |_| _|': 9
};

function parseBankDigits(input: string, digitCol = 3, digitRow = 3): string {
  const digits: (string | number)[] = [];

  const rows = input.split(/\n/);

  for (let i = 0; i < Math.floor(input.length / digitRow); i += digitCol) {
    const key = rows.reduce((d, row) => (d += row.substring(i, i + digitCol)), '');
    digits.push(DigitsDictionary[key] || '?');
  }

  return digits.join('');
}

console.log(
  parseBankDigits(
    '    _  _     _  _  _  _  _ ' + '\n' + // eslint-disable-line prettier/prettier
    '  | _| _||_||_ |_   ||_||_|' + '\n' + // eslint-disable-line prettier/prettier
    '  ||_  _|  | _||_|  ||_| _|')         // eslint-disable-line prettier/prettier
);
