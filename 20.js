// Factorial digit sum
// Problem 20
//
// n! means n × (n − 1) × ... × 3 × 2 × 1
//
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
//
// Find the sum of the digits in the number 100!

var sumOfFactorialDigits = function (n) {
    var sumLarge = function (a, b) {
        a = a.split("").reverse();
        b = b.split("").reverse();
        for (var i = 0; i < b.length; i++) {
            a[i] = parseInt(a[i] || 0) + parseInt(b[i]);
            if (a[i] >= 10) {
                a[i] -= 10;
                a[i + 1] = parseInt(a[i + 1] || 0) + 1;
            }
        }
        return a.reverse().join("");
    }
    var multiLarge = function (a, b) {
        a = a.split("").reverse();
        b = b.split("").reverse();
        var r = '', c = [];
        for (var j = 0; j < b.length; j++) {
            c = [];
            for (var k = 0; k <= j; k++) {
                c[k] = 0;
            }
            for (var i = 0; i < a.length; i++) {
                c[i + j] = parseInt(a[i]) * parseInt(b[j]);
            }
            for (var k = 0; k < c.length; k++) {
                if (c[k] >= 10) {
                    c[k + 1] = parseInt(c[k + 1] || 0) + (c[k] - c[k] % 10) / 10;
                    c[k] = c[k] % 10;
                }
            }
            r = sumLarge(r, c.reverse().join(""));
        }
        return r;
    };
    var f = '1';
    for (var i = 2; i <= n; i++) {
        f = multiLarge("" + f, "" + i);
    }
    console.log(f);
    var sum = f.split("").reduce(function (x, y) {
        return parseInt(x) + parseInt(y);
    });
    console.log(sum);
};

sumOfFactorialDigits(10);
sumOfFactorialDigits(100);
