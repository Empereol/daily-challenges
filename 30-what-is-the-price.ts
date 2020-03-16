/**
 * Daily Challenge #30 - What is the price?
 * https://dev.to/thepracticaldev/daily-challenge-30-what-is-the-price-16ee
 *
 * Your challenge today is to find the original price of a product before sales discount.
 *
 * For example:
 * Given an item at $75 sale price after applying a 25% discount, the function should return
 * the original price of that item before applying the sale percentage, which is ($100.00)
 * of course, rounded to two decimal places.
 *
 * DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price),
 * 25 is the sale percentage and 100 is the original price
 *
 * Note: The return type must be of type decimal and the number must be rounded to two
 * decimal places.
 */

function discoverOriginalPrice(price: number, discount: number): string {
  return ((price * 100) / (100 - discount)).toFixed(2);
}

console.log(discoverOriginalPrice(75, 25)); // → '100.00'
