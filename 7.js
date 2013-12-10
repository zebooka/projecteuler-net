// 10001st prime
// Problem 7
//
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

var primeNumber = function (n) {
    var primes = [];

    var isPrime = function (p, primes) {
        for (var i = 0; i < primes.length; i++) {
            if (p % primes[i] == 0) {
                return false;
            }
        }
        return true;
    };

    for (var p = 2; primes.length < n; p++) {
        if (isPrime(p, primes)) {
            primes.push(p);
        }
    }

    console.log(primes[n - 1]);
};

primeNumber(6);
primeNumber(10001);
