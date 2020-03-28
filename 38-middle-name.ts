/**
 * Daily Challenge #38 - Middle Name
 * https://dev.to/thepracticaldev/daily-challenge-38-middle-name-45ie
 *
 * Initialize an individual's middle name (if there is any).
 *
 * Example:
 * 'Jack Ryan' => 'Jack Ryan'
 * 'Lois Mary Lane' => 'Lois M. Lane'
 * 'Dimitri' => 'Dimitri'
 * 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
 */

function formatName(name: string): string {
  return name
    .trim()
    .split(" ")
    .map((n, idx, arr) =>
      idx === 0 || idx === arr.length - 1
        ? `${n[0].toUpperCase()}${n.slice(1)}`
        : `${n[0].toUpperCase()}.`
    )
    .join(" ");
}

console.log(formatName("Jack Ryan"));
console.log(formatName("Lois Mary Lane"));
console.log(formatName("Dimitri"));
console.log(formatName("Alice Betty Catherine Davis"));
