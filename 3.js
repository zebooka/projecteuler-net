// Largest prime factor
// Problem 3
//
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

var primeFactor = function (n) {
    var primes = [], factors = [];

    var isPrime = function (p, primes) {
        for (var i = 0; i < primes.length; i++) {
            if (p % primes[i] == 0) {
                return false;
            }
        }
        return true;
    };

    for (var p = 2; p <= n; p++) {
        if (isPrime(p, primes)) {
            primes.push(p);
            if (n % p == 0) {
                factors.push(p);
            }
            while (n % p == 0) {
                n /= p;
            }
        }
    }

    console.log(factors);
};

primeFactor(13195);
primeFactor(600851475143);
