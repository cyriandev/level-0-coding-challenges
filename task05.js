// Task 0.5


function area(a, b, c) {

    var semiperimeter = (a + b + c) / 2;
    var area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));

    return area.toFixed(2);
}

console.log(`The area of the triangle is ${area(6, 6, 6)} Square units`);
