
var bigData = [];
for (var i = 0; i < 10000000; i++) {
  bigData[i] = i;
}


let filterBegin = Date.now()
var filterMappedBigData = bigData.filter(function(value) {
  return value % 2 === 0;
}).map(function(value) {
  return value * 2;
});
let filterEnd = Date.now()
let filtertimeSpent = (filterEnd-filterBegin)/1000 + "secs";


let reducedBegin=Date.now();
var reducedBigData = bigData.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;

  /* return value % 2 === 0 
  ? acc.concat(value*2)
  : acc */ // this takes much longer 
}, []);
let reducedEnd = Date.now();
let reducedtimeSpent = (reducedEnd-reducedBegin)/1000 + " secs";

console.log("filtered Big Data:", filtertimeSpent)
console.log("reduced Big Data:", reducedtimeSpent)