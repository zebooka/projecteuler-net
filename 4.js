// Largest palindrome product
// Problem 4
//
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

var largestPalindrome = function (digits) {
    var min = Math.pow(10, digits - 1),
        max = Math.pow(10, digits);

    var isPalindrome = function (n) {
        return ("" + n).split("").reverse().join("") == n;
    }

    var multipliers = [], largest = 0;

    for (var i = min; i < max; i++) {
        for (var j = min; j <= i; j++) {
            if (isPalindrome(i * j)) {
                if (i * j > largest) {
                    largest = i * j;
                    multipliers = [j, i];
                }
            }
        }
    }

    console.log(multipliers);
    console.log(largest);
};

largestPalindrome(2);
largestPalindrome(3);
