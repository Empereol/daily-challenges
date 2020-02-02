import { createPhoneNumber } from "./178-create-phone-numbers";

function encryptNum(input: string): string {
    const phoneNumber = createPhoneNumber((input.match(/\d/g) || []).map(Number), true);

    if (!phoneNumber) {
        return "Could not encrypt phone number. Invalid input."
    }

    return phoneNumber;
}

(function main() {
    const tests = [
        '201-680-0202',
        '328 6587120',
        '212-420-0202',
        '211-458-7851',
    ];

    for (const test of tests) {
        console.log(encryptNum(test));
    }
})()
