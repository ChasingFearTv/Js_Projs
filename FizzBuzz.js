var output = [];

var count = 0;

function fizzBuzz() {

    while (count <=10) {
    
    
    if (count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        
    count++;
    
    }
    
    console.log(output);
    
}

