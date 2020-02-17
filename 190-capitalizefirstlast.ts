/**
 * Daily Challenge #190 - capitalizeFirstLast
 * https://dev.to/thepracticaldev/daily-challenge-190-capitalizefirstlast-58jf
 *
 * For this challenge, you will have to write a function called capitalizeFirstLast or capitalize_first_last.
 * This function will capitalize the first and last letter of each word, and lowercase what is in between.
 * capitalizeFirstLast "and still i rise" -- "AnD StilL I RisE"
 *
 * Rules:
 * * The function will take a single parameter, which will be a string.
 * * The string can contain words separated by a single space.
 * * Words are made of letters from the ASCII range only.
 * * The function should return a string.
 * * Only the first and last letters are uppercased.
 * * All the other letters should be lowercased.
 *
 * Examples:
 * * capitalizeFirstLast "and still i rise"               -- "AnD StilL I RisE"
 * * capitalizeFirstLast "when words fail music speaks"   -- "WheN WordS FaiL MusiC SpeakS"
 * * capitalizeFirstLast "WHAT WE THINK WE BECOME"        -- "WhaT WE ThinK WE BecomE"
 * * capitalizeFirstLast "dIe wITh mEMORIEs nOt dREAMs"   -- "DiE WitH MemorieS NoT DreamS"
 * * capitalizeFirstLast "hello"                          -- "HellO"
 */

function capitalizeFirstLast(input: string): string {
  return input
    .toLowerCase()
    .split(" ")
    .map(word => {
      return word.split("").reduce((acc, cur, idx) => {
        if (idx === 0 || idx === word.length - 1) cur = cur.toUpperCase();
        return acc + cur;
      }, "");
    })
    .join(" ");
}

(function main(): void {
  const tests: [string, string][] = [
    ["and still i rise", "AnD StilL I RisE"],
    ["when words fail music speaks", "WheN WordS FaiL MusiC SpeakS"],
    ["WHAT WE THINK WE BECOME", "WhaT WE ThinK WE BecomE"],
    ["dIe wITh mEMORIEs nOt dREAMs", "DiE WitH MemorieS NoT DreamS"],
    ["hello", "HellO"]
  ];

  for (const [test, expected] of tests) {
    console.log(`${capitalizeFirstLast(test) === expected ? "PASS" : "FAIL"}`, {
      result: capitalizeFirstLast(test),
      test,
      expected
    });
  }
})();
