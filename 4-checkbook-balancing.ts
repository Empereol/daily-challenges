/**
 * Daily Challenge #4 - Checkbook Balancing
 * https://dev.to/thepracticaldev/daily-challenge-4-checkbook-balancing-hei
 *
 * You are given a small checkbook to balance that is given to you as a string.
 * Sometimes, this checkbook will be cluttered by non-alphanumeric characters.
 *
 * The first line shows the original balance. Each other (not blank) line gives information:
 * check number, category, and check amount.
 *
 * You need to clean the lines first, keeping only letters, digits, dots, and spaces.
 * Next, return the report as a string. On each line of the report, you have to add the new balance.
 * In the last two lines, return the total expenses and average expense.
 * Round your results to two decimal places.
 *
 * Example Checkbook
 * 1000.00
 * 125 Market 125.45
 * 126 Hardware 34.95
 * 127 Video 7.45
 * 128 Book 14.32
 * 129 Gasoline 16.10
 *
 * Example Solution
 * Original_Balance: 1000.00
 * 125 Market 125.45 Balance 874.55
 * 126 Hardware 34.95 Balance 839.60
 * 127 Video 7.45 Balance 832.15
 * 128 Book 14.32 Balance 817.83
 * 129 Gasoline 16.10 Balance 801.73
 * Total expense 198.27
 * Average expense 39.65
 *
 * Challenge Checkbook
 * 1233.00
 * 125 Hardware;! 24.8?;
 * 123 Flowers 93.5
 * 127 Meat 120.90
 * 120 Picture 34.00
 * 124 Gasoline 11.00
 * 123 Photos;! 71.4?;
 * 122 Picture 93.5
 * 132 Tires;! 19.00,?;
 * 129 Stamps 13.6
 * 129 Fruits{} 17.6
 * 129 Market;! 128.00?;
 * 121 Gasoline;! 13.6?;
 */

interface CheckbookItem {
  check: number;
  category: string;
  cost: number;
}

/**
 * Remove all non alphanumeric characters except spaces and decimals
 * @param input String to sanitize
 */
function sanitize(input: string): string {
  return input.trim().replace(/[^0-9a-z\. ]/gi, '');
}

/**
 * Create a `CheckbookItem` from the given string
 * @param input
 */
function createCheckookItem(input: string): CheckbookItem {
  const item = sanitize(input).split(' ');

  if (item.length !== 3) {
    console.warn('Could not create CheckbookItem. Invalid input.');
    return;
  }

  return {
    check: parseFloat(item[0]),
    category: item[1],
    cost: parseFloat(item[2])
  };
}

/**
 * Format a string to 2 fractional units
 * @param input
 */
function formatNum(input: number): string {
  return input.toFixed(2);
}

/**
 * Format a given checkbook string
 * @param checkbook
 */
function balanceCheckbook(checkbook: string): string {
  const lines = checkbook.split(/\n/g);
  const lineItems = lines.slice(1).map(createCheckookItem);

  let balance = parseFloat(lines[0]);
  let checkbookStr = `Original_Balance: ${formatNum(balance)}`;

  for (const item of lineItems) {
    const check = item.check.toString().padStart(5, '0');
    const cat = item.category.toString().padEnd(10);
    const cost = formatNum(item.cost).padStart(10);

    checkbookStr += `\n${check} ${cat} ${cost} Balance: ${formatNum((balance -= item.cost))}`;
  }

  const total = lineItems.reduce((t, item) => t + item.cost, 0);
  const average = total / lineItems.length;

  checkbookStr += `\nTotal expense: ${formatNum(total)}`;
  checkbookStr += `\nAverage expense: ${formatNum(average)}`;

  return checkbookStr;
}

console.log(
  balanceCheckbook(`1000.00
    125 Market 125.45
    126 Hardware 34.95
    127 Video 7.45
    128 Book 14.32
    129 Gasoline 16.10`)
);
