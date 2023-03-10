function bmiScale(weight, height) {

    var bmi = weight / Math.pow(height, 2);
    
    
    if (bmi < 18.5) {
    
        return("Your BMI is: " + Math.round(bmi) + "%. aw man, i think u need a hamm burger.");
    
    }

    if (bmi > 18.5 && bmi < 24.9) {
    
        return("Your BMI is: " + Math.round(bmi) + "%. You seem to take care of yourself.");
    
    }
    if (bmi > 24.9) {
    
        return("Your BMI is: " + Math.round(bmi) + "%. well well well, I guess time has come... time to diet!");
    
    }
}

bmiScale(45, 1.9);
