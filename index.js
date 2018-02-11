var data = [1,2,3]

var result = data.reduce((acc, curr)=> acc.concat(curr*2),[])

console.log(result);