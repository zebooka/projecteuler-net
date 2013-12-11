// Power digit sum
// Problem 16
//
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//
// What is the sum of the digits of the number 2^1000?

var powerDigitSum = function (n, power) {
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
    var powerLarge = function (a, p) {
        var r = '1';
        for (var i = 0; i < p; i++) {
            r = multiLarge(r, a);
        }
        return r;
    };
    console.log(powerLarge("" + n, "" + power));
    var sum = powerLarge("" + n, "" + power).split("").reduce(function (x, y) {
        return parseInt(x) + parseInt(y);
    });
    console.log(sum);
};

powerDigitSum(2, 15);
powerDigitSum(2, 1000);
