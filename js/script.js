function konversiSuhu() {
    var celsiusInput = document.getElementById('celsius').value;
    var fahrenheitInput = document.getElementById('Fahrenheit').value;

    if (celsiusInput !== "") {
        var celsius = parseFloat(celsiusInput);
        var fahrenheitResult = (celsius * 9/5) + 32;
        document.getElementById('Fahrenheit').value = fahrenheitResult.toFixed(2);
    }
    else if (fahrenheitInput !== "") {
        var fahrenheit = parseFloat(fahrenheitInput);
        var celsiusResult = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsiusResult.toFixed(2); 
    }
    else {
        alert("Masukkan suhu yang valid!");
    }
}


function reset() {
    document.getElementById('celsius').value = "";
    document.getElementById('Fahrenheit').value = "";
    document.getElementById('hasil').innerHTML = "";
}

function reverse() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('Fahrenheit');
    var temp = celsiusInput.value;
    celsiusInput.value = fahrenheitInput.value;
    fahrenheitInput.value = temp;
    var celsiusLabel = document.querySelector('label[for="celsius"]');
    var fahrenheitLabel = document.querySelector('label[for="Fahrenheit"]');
    if (celsiusLabel.textContent === "Celsius (°C) :") {
        celsiusLabel.textContent = "Fahrenheit (°F) :";
        fahrenheitLabel.textContent = "Celsius (°C) :";
    } else {
        celsiusLabel.textContent = "Celsius (°C) :";
        fahrenheitLabel.textContent = "Fahrenheit (°F) :";
    }
    var celsiusPlaceholder = celsiusInput.placeholder;
    celsiusInput.placeholder = fahrenheitInput.placeholder;
    fahrenheitInput.placeholder = celsiusPlaceholder;
}
