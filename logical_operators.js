//logical operators are of three types:
const a = true, b = false;
const c = 4;

// logical AND
console.log(a && a); // true
console.log(a && b);  // false
console.log((c > 2) && (c < 2)); // false


// logical OR
console.log(a || b); // true
console.log(b || b); // false
console.log((c>2) || (c<2)); // true

// logical NOT
console.log(!a); // false
console.log(!b); // true
