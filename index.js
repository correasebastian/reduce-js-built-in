//see CONSOLE!
var votes = [
    "angular",
    "angular",
    "react",
    "react",
    "react",
    "angular",
    "ember",
    "react",
    "vanilla"
  ];
  
  var initialValue = {};

  var reducer = function (tally, vote) {

      tally[vote] = tally[vote]
          ? tally[vote] + 1
          :  1

      return tally
  };
  
  var result = votes.reduce(reducer, initialValue);
  
  // Output
  console.log("Angular: ", result.angular)
  console.log("React: ", result.react)
  console.log("Ember: ", result.ember)
  console.log("Vanilla: ", result.vanilla)