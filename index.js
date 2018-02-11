function increment(input) { 
    console.log(`increment ${input}`);
    return input + 1; 
}
function decrement(input) { 
    console.log(`decrement ${input}`);
    return input - 1;
 }
function double(input) { 
    console.log(`double ${input}`);
    return input * 2; 
}
function halve(input) { 
    console.log(`halve ${input}`);
    return input / 2; 
}

var initial_value = 1;

/* 
Naive
difficult to read, you can call a function with the worng parameter
*/
var increment_value = increment(initial_value);
var double_value = double(increment_value);
var decrement_value = decrement(double_value)

console.log(` result is ${decrement_value}`);