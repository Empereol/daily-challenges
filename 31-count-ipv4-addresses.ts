/**
 * Daily Challenge #31 - Count IPv4 Addresses
 * https://dev.to/thepracticaldev/daily-challenge-31-count-ipv4-addresses-487j
 *
 * Your challenge is to write a function that accepts starting and ending IPv4
 * addresses and returns the number of IP addresses from start to end, excluding
 * the ending address. All input will be valid IPv4 addresses in the forms of strings.
 *
 * Examples:
 * ipsBetween("10.0.0.0", "10.0.0.50") => 50
 * ipsBetween("10.0.0.0", "10.0.1.0") => 256
 * ipsBetween("20.0.0.10", "20.0.1.0") => 246
 */

/**
 * Calculate the number of IPs available between two IPv4 addresses
 * @param {string} startIpv4 Starting IPv4 address
 * @param {string} endIpv4 End IPv4 address
 */
function ipsBetween(startIpv4: string, endIpv4: string): number {
  return ipv4ToInt(endIpv4) - ipv4ToInt(startIpv4);
}

/**
 * Convert an IPv4 address to an integer
 * @param {string} ipv4 IPv4 address
 */
function ipv4ToInt(ipv4: string): number {
  const validIpRe: RegExp = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;

  if (validIpRe.test(ipv4) === false) {
    console.warn('Invalid IPv4 string supplied');
    return;
  }

  return ipv4.split('.').reduce((total, octet) => (total << 8) | Number(octet), 0);
}

/**
 * Test
 */
(function Main(): void {
  const tests: [[string, string], number][] = [
    [['10.0.0.0', '10.0.0.50'], 50],
    [['10.0.0.0', '10.0.1.0'], 256],
    [['20.0.0.10', '20.0.1.0'], 246]
  ];

  for (const [args, expected] of tests) {
    const result = ipsBetween(...args);
    console.log(result === expected ? 'PASS' : 'FAIL', { args, expected, result });
  }
})();
