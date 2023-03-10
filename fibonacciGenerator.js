

function fibonacciGenerator(n) {
  var output = [];
  if (n === 1 || n === 0) {
    output.push(0);
  } else if (n === 2) {
    output.push(0, 1);
  } else {
    output.push(0, 1);
    while (output.length < n) {
      var lastTwoValues = output.slice(-2);
      var sumOfTwoValues = lastTwoValues[0] + lastTwoValues[1];
      output.push(sumOfTwoValues);
        // OR
        //for (var i = 2; i < n; i++){
            //output.push(output[output.length -2] + output[output.length -1]);
        // 
    }
  }
  return output;
}