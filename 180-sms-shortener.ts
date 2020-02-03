/*
Daily Challenge #180 - SMS Shortener
https://dev.to/thepracticaldev/daily-challenge-180-sms-shortener-43lk

Setup
SMS messages are limited to 160 characters. It tends to be irritating, 
especially when freshly written message is 164 characters long. Implement a 
function to shorten the message to 160 characters, starting from the end, by 
replacing spaces with camelCase, as much as necessary.

Example
Original Message:
No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and
surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that 
will be it.

Shortened Message:
No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and
surprise; two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.

Tests
"SMS messages are limited to 160 characters. It tends to be irritating, 
especially when freshly written message is 164 characters long. SMS messages 
are limited to 160 characters. It tends to be irritating, especially when 
freshly written message is 164 characters long."

"This message is already short enough!"

"ThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoon"
*/

const MAX_CHARACTERS = 160;

/**
 * Shorten the message to 160 characters, starting from the end, by replacing spaces
 * with camelCase, as much as necessary.
 * @param message Message to shorten
 */
function smsShortener(message: string): string {
  const toRemove: number = message.length - MAX_CHARACTERS;

  // Return the message if it's short enough
  if (toRemove <= 0) {
    return message;
  }

  // Replace spaces with camelCase at the end of the message, as much as necessary.
  const shortenedMsg = message.split(' ').reduce((msg, word, idx, array) => {
    if (idx >= array.length - toRemove) {
      return msg + word[0].toUpperCase() + word.substring(1);
    }

    return `${msg} ${word}`;
  });

  // Return only the first `MAX_CHARACTERS`... Hopefully there were enough spaces
  // to shorten the message enough... Otherwise, it gets the chop!
  return shortenedMsg.substring(0, MAX_CHARACTERS);
}

(function main() {
  const tests = [
    'No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.',
    'SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.',
    'This message is already short enough!',
    'ThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoon'
  ];

  for (const test of tests) {
    console.log(smsShortener(test));
  }
})();
