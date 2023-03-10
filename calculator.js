function calculator(){
    var option = prompt("add? substract? multiply? divide?");
    var x = parseFloat(prompt("whats your first number?"));
    var y = parseFloat(prompt("whats your second numer?"));
    switch (option){
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            if (x === 0 || y === 0) {
                console.error("Umm you cant divide by zero.");
            } else {
                return x / y;
            }
        default:
            console.error("well you probably did something wrong..");
    }
}