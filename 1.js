// Multiples of 3 and 5
// Problem 1
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

(function (limit) {
    var sum = 0;
    for (var i = 0; i < limit; i += 3) {
        sum += i;
    }
    for (var i = 0; i < limit; i += 5) {
        if (i % 3 != 0) {
            sum += i;
        }
    }
    console.log(sum);
})(1000);
