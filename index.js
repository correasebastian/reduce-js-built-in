var data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var flatten = data.reduce(
    (acc, curr)=> acc.concat(curr),
    []
   /*  Array.isArray(curr) 
    ? acc.concat(curr)
    : acc.concat */
)

console.log(flatten);