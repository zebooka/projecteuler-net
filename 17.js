// Number letter counts
// Problem 17
//
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
//
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
//
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen)
// contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

var numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    },
    sum = 0;

var countLetters = function(s) {
    return s.replace(/[^a-z]+/g, '').length;
};

for (var i = 1; i <= 1000; i++) {
    var thousands = Math.floor(i % 10000 / 1000),
        hundreds = Math.floor(i % 1000 / 100),
        tens = Math.floor(i % 100 / 10),
        digit = Math.floor(i % 10),
        lastTwo = Math.floor(i % 100),
        british = '',
        britishLarge = '',
        britishSmall = '';

    if (thousands > 0) {
        britishLarge += numbers[thousands] + ' thousand';
    }
    if (thousands > 0 && hundreds > 0) {
        britishLarge += ' ';
    }
    if (hundreds > 0) {
        britishLarge += numbers[hundreds] + ' hundred';
    }
    if (tens >= 2) {
        britishSmall = numbers[tens * 10] + (digit ? '-' + numbers[digit] : '');
    } else if (lastTwo > 0) {
        britishSmall = numbers[lastTwo];
    }
    british = britishLarge + (britishLarge && britishSmall ? ' and ' : '') + britishSmall;

    console.log(i + ') ' + british);
    sum += countLetters(british);
}

console.log('Total letters: ' + sum);
