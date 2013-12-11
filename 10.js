// Summation of primes
// Problem 10
//
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

var primesSum = function (n) {
    var sieve = [], sum = 0;

    for (var i = 2; i < n; i++) {
        if (sieve[i] || 0) {
            continue;
        }
        for (var j = i; j < n; j += i) {
            sieve[j] = true;
        }
        sum += i;
    }

    console.log(sum);
};

primesSum(10);
primesSum(2000000);
