/*
Daily Challenge #179 - Hide Phone Numbers
https://dev.to/thepracticaldev/daily-challenge-179-hide-phone-numbers-5059

Setup
Implement a function that will hide the last six digits of each phone number. 
Your function should be able to understand the separators for US numbers. 
Phone numbers can be separated by spaces, periods, or hyphens.

Examples
Original: 201-680-0202
Encrypted: `201-6XX-XXXX

Tests
encryptNum("328 6587120")
encryptNum("212-420-0202")
encryptNum("211-458-7851")
*/

/*
My notes:
I think it makes more sense to return the formatted number as opposed to the format,
or lack thereof, given.
*/

import { createPhoneNumber } from './178-create-phone-numbers';

function encryptNum(input: string): string {
  const phoneNumber = createPhoneNumber((input.match(/\d/g) || []).map(Number), true);

  if (!phoneNumber) {
    return 'Could not encrypt phone number. Invalid input.';
  }

  return phoneNumber;
}

(function main() {
  const tests = ['201-680-0202', '328 6587120', '212-420-0202', '211-458-7851'];

  for (const test of tests) {
    console.log(encryptNum(test));
  }
})();
