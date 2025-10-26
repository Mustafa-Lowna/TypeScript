function calculateBMI(weight, height) {
    if (weight <= 0) {
        console.log("Weight cannot be less than zero");
        return;
    }
    if (height <= 0) {
        console.log("Height cannot be less than or equal to zero");
        return;
    }
    var bmi = weight / (height * height);
    console.log(Math.round(bmi * 100) / 100);
    if (bmi < 18.5) {
        console.log("Underweight");
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        console.log("Normal weight");
    }
    else if (bmi >= 25 && bmi < 29.9) {
        console.log("Over weight");
    }
    else {
        console.log("Obese");
    }
}
calculateBMI(70, 1.75);
