// Special Pythagorean triplet
// Problem 9
//
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product a × b × c.

var tripletProduct = function (sum) {
    for (var b = 1; b < sum / 2; b++) {
        for (var a = 1; a < b, a + b < sum; a++) {
            if ((a * a + b * b == Math.pow(sum - a - b, 2))) {
                console.log([a, b, sum - a - b]);
                console.log(a * b * (sum - a - b));
            }
        }
    }
};

tripletProduct(1000);
