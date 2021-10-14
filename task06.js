// Task 0.6


function maximum() {
    var max = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

console.log(maximum(1, 22, 3, 2));