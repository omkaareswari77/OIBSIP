//Temperature conversion logic
function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    // Validation
    if (temp === "" || isNaN(temp)) {
        result.innerHTML = "⚠️ Invalid input";
        return;
    }

    temp = Number(temp);
    let converted = "";
    //Conversion based on selected unit

    if (unit === "celsius") {
        converted = `
        Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F <br>
        Kelvin: ${(temp + 273.15).toFixed(1)} K
        `;
    } 
    else if (unit === "fahrenheit") {
        converted = `
        Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C <br>
        Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(1)} K
        `;
    } 
    else {
        converted = `
        Celsius: ${(temp - 273.15).toFixed(2)} °C <br>
        Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F
        `;
    }

    result.innerHTML = "Result:<br>" + converted;
}