/**
 * Daily Challenge #188 - Break camelCase
 * https://dev.to/thepracticaldev/daily-challenge-188-break-camelcase-3ppf
 *
 * Write a function that will turn a camelCase word into a regular one by
 * adding spaces and lower-casing the words.
 *
 * Examples
 * ccbreaker("camelCasing") == "camel casing"
 * ccbreaker("garbageTruck") == "garbage truck"
 *
 * Tests
 * ccbreaker("policeSiren") == "police siren"
 * ccbreaker("camelCasingTest") == "camel casing test"
 */

/**
 * Return a space-cased string from a cameCase input
 */
function ccBreaker(camelCased: string): string {
  return camelCased
    .split(/(?=[A-Z])/g)
    .join(" ")
    .toLowerCase();

  // return camelCased.split("").reduce((sentence, letter) => {
  //   if (letter.match(/[A-Z]/)) {
  //     return sentence + " " + letter.toLowerCase();
  //   }

  //   return sentence + letter;
  // }, "");
}

(function main(): void {
  const tests: [string, string][] = [
    ["camelCasing", "camel casing"],
    ["garbageTruck", "garbage truck"],
    ["policeSiren", "police siren"],
    ["camelCasingTest", "camel casing test"]
  ];

  for (const [test, expected] of tests) {
    console.log({ test, expected, result: ccBreaker(test) });
  }
})();
