function generateFibonacci() {
    let inputNumber = document.getElementById('inputNumber').value;
    let number = parseInt(inputNumber);

    if (isNaN(number) || number <= 0) {
        alert("Por favor, introduce un número válido mayor que 0.");
        return;
    }

    let fibonacciSeries = calculateFibonacci(number);
    displayResult(fibonacciSeries);
}

function calculateFibonacci(n) {
    let fibSeries = [];
    if (n >= 1) fibSeries.push(0);
    if (n >= 2) fibSeries.push(1);

    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }

    return fibSeries;
}

function displayResult(series) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = series.join(', ');
}
