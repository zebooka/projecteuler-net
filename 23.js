// Non-abundant sums
// Problem 23
//
// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum
// of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
//
// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
//
// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two
// abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as
// the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is
// known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
//
// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

var numbers = [],
    sum = 0,
    max = 28123;

for (var n = 1; n < max; n++) {
    var sumOfDivisors = 0;
    for (var i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            sumOfDivisors += i;
        }
    }
    numbers[n] = (sumOfDivisors < n ? -1 : (sumOfDivisors == n ? 0 : 1));
    var canBeWritten = false;

    for (var j = 1; j <= n / 2; j++) {
        if (numbers[j] > 0 && numbers[n - j] > 0) {
            canBeWritten = true;
            break;
        }
    }
    if (!canBeWritten) {
        sum += n;
        console.log(n + ' can\'t be written as sum of two abundant numbers.');
    }
}
console.log('Sum of all the positive integers which cannot be written as the sum of two abundant numbers = ' + sum);
