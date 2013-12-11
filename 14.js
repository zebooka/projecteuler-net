// Longest Collatz sequence
// Problem 14
//
// The following iterative sequence is defined for the set of positive integers:
//
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following sequence:
//
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
// Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
// NOTE: Once the chain starts the terms are allowed to go above one million.

var longestChainHead = function (limit) {
    var nextCollatzNumber = function (n) {
        if (n % 2 == 0) {
            return n / 2;
        } else {
            return 3 * n + 1;
        }
    };

    var collatzes = [ , 1];
    var sequenceLength = function sequenceLength(n) {
        if (typeof collatzes[n] == 'undefined') {
            collatzes[n] = 1 + sequenceLength(nextCollatzNumber(n));
        }
        return collatzes[n];
    };

    var longest = 0, head = 0;
    for (var i = 2; i < limit; i++) {
        var length = sequenceLength(i);
        if (length > longest) {
            longest = length;
            head = i;
        }
    }

    console.log('Max chain length:');
    console.log(longest);
    console.log('Head number:');
    console.log(head);
};

longestChainHead(1000000);
