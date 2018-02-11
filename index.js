var data = [1, 2, 3, 4, 5, 6]

var onlyEven = data.reduce(
    (acc, curr) =>
        curr % 2 === 0
            ? acc.concat(curr)
            : acc
    , []
)

console.log(onlyEven);

