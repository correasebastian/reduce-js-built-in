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


/* transform function */

function transform (input ){
    return ((( input + 1) * 2) -1) 
}

console.log(` transform  is ${transform(initial_value)}`);

/* Pipeline */

var pipeline = [
    increment,
    double,
    decrement
]

var pipeline_result = pipeline.reduce(
    (acc, fn) => fn(acc),
    initial_value
)

console.log(` pipeline_result  is ${pipeline_result}`);

function compose(...fns) {
    return (input) =>
        fns.reduce(
            (acc, fn) => fn(acc),
            input
        )

}

var composition = compose (increment, double, decrement);

console.log(` composition_result  is ${composition(initial_value)}`);
