// Smallest multiple
// Problem 5
//
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible (divisible with no remainder) by all of the numbers from 1 to 20?

var smallestMultiple = function (min, max) {
    var primes = [];

    var isPrime = function (p, primes) {
        for (var i = 0; i < primes.length; i++) {
            if (p % primes[i] == 0) {
                return false;
            }
        }
        return true;
    };

    for (var p = 2; p <= max; p++) {
        if (isPrime(p, primes)) {
            primes.push(p);
        }
    }

    var maxMultipliers = [];
    for (var i = min; i <= max; i++) {
        var multipliers = [];
        for (var j = 0; j < primes.length; j++) {
            var ii = i, p = primes[j];
            multipliers[p] = 0;
            while (ii % p == 0) {
                multipliers[p]++;
                ii /= p;
            }
        }
        for (var j = 0; j < multipliers.length; j++) {
            maxMultipliers[j] = Math.max(maxMultipliers[j] || 0, multipliers[j] || 0);
        }
    }

    var multiple = 1;
    for (var j = 0; j < maxMultipliers.length; j++) {
        multiple *= Math.pow(j, maxMultipliers[j]);
    }
    console.log(multiple);
};

smallestMultiple(1, 10);
smallestMultiple(1, 20);
