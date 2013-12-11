// Counting Sundays
// Problem 19

// You are given the following information, but you may prefer to do some research for yourself.
//
// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
//
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

(function () {
    var months = [, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var leapMonths = [, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var isLeap = function (y) {
        return (y % 4 == 0 && (y % 400 == 0 || y % 100 != 0));
    }

    var dow = 1, sundays = 0;
    for (var y = 1900; y < 2001; y++) {
        for (var m = 1; m <= 12; m++) {
            dow += isLeap(y) ? leapMonths[m] : months[m];
            dow = dow % 7;
            if (dow % 7 == 0 && y > 1900) {
                sundays++;
            }
        }
    }
    console.log(sundays);
})();
