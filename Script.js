function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }
    
    const temperature = parseFloat(temperatureInput);
    let result;
    
    if (unit === 'celsius') {
        const toFahrenheit = (temperature * 9/5) + 32;
        const toKelvin = temperature + 273.15;
        result = ${temperature}°C = ${toFahrenheit.toFixed(2)}°F = ${toKelvin.toFixed(2)}K;
    } else if (unit === 'fahrenheit') {
        const toCelsius = (temperature - 32) * 5/9;
        const toKelvin = (temperature - 32) * 5/9 + 273.15;
        result = ${temperature}°F = ${toCelsius.toFixed(2)}°C = ${toKelvin.toFixed(2)}K;
    } else if (unit === 'kelvin') {
        const toCelsius = temperature - 273.15;
        const toFahrenheit = (temperature - 273.15) * 9/5 + 32;
        result = ${temperature}K = ${toCelsius.toFixed(2)}°C = ${toFahrenheit.toFixed(2)}°F;
    }
    
    resultDiv.textContent = result;
}