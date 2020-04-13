/**
 * Daily Challenge #224 - Password Validator
 *
 * https://dev.to/thepracticaldev/daily-challenge-224-password-validator-7if
 *
 * Write a quick password validator to make sure that the people that visit your
 * site use appropriate passwords.
 *
 * Respond with "VALID" if the string meets the requirements or "INVALID" if it
 * does not.
 *
 * Requirements:
 * More than 3 characters but less than 20.
 * Must contain only alphanumeric characters.
 * Must contain letters and numbers.
 *
 * Examples
 * 'Username123!' => INVALID
 * '123' => INVALID
 * 'Username123' => VALID
 *
 * Tests
 * 'Username'
 * 'IsThisPasswordTooLong'
 * 'DEVCommunity'
 */

function validate(password: string): string {
  return /^(?=.*[0-9])(?=.*[a-z])([a-z0-9]){3,20}$/gi.test(password) ? 'VALID' : 'INVALID';
}

console.log(validate('Username123!'));
console.log(validate('123'));
console.log(validate('Username123'));
console.log(validate('Username'));
console.log(validate('IsThisPasswordToo123'));
console.log(validate('IsThisPasswordTooLong123'));
console.log(validate('DEVCommunity'));
