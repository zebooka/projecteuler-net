// Amicable numbers
// Problem 21
//
// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
// The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
//
// Evaluate the sum of all the amicable numbers under 10000.

var subAmicableNumbers = function (lowerThan) {
    var sumOfDivisors = [],
        sumOfAmicableNumbers = 0;
    for (var n = 1; n < lowerThan; n++) {
        sumOfDivisors[n] = 0;
        for (var i = 1; i <= n / 2; i++){
            if (n % i == 0) {
                sumOfDivisors[n] += i;
            }
        }
    }
    for (var n = 1; n < sumOfDivisors.length; n++) {
        if (n == sumOfDivisors[sumOfDivisors[n]] && n != sumOfDivisors[n] && n < sumOfDivisors[n]) {
            console.log(n + " + " + sumOfDivisors[n]);
            sumOfAmicableNumbers += n + sumOfDivisors[n];
        }
    }
    return sumOfAmicableNumbers;
};

console.log("Sum of amicable number: " + subAmicableNumbers(10000));
