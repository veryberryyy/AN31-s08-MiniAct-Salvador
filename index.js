document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn').addEventListener('click', function() {
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        let operator = document.getElementById('operator').value.trim();
        let resultDiv = document.getElementById('result');

        resultDiv.textContent = '';
        resultDiv.classList.remove('error');

        if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
            console.log('Invalid input. Please enter valid numbers.');
            resultDiv.textContent = 'Invalid input. Please enter valid numbers.';
            resultDiv.classList.add('error');
            return;
        }

        if (!['+', '-', '*', '/'].includes(operator)) {
            console.log('Invalid operation. Please use +, -, *, or /.');
            resultDiv.textContent = 'Invalid operation. Please use +, -, *, or /.';
            resultDiv.classList.add('error');
            return;
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        let result;

        if (operator === '+') {
            console.log('Addition!');
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`);
        } 
        else if (operator === '-') {
            console.log('Subtraction!');
            result = num1 - num2;
            console.log(`${num1} - ${num2} = ${result}`);
        } 
        else if (operator === '/') {
            console.log('Division!');
            if (num1 === 0 || num2 === 0) {
                console.log('Error: Division by zero is not allowed.');
                resultDiv.textContent = 'Error: Division by zero is not allowed.';
                resultDiv.classList.add('error');
                return;
            } 
            else {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result}`);
            }
        } 
        else if (operator === '*') {
            console.log('Multiplication!');
            result = num1 * num2;
            console.log(`${num1} * ${num2} = ${result}`);
        }

        resultDiv.textContent = `${num1} ${operator} ${num2} = ${result}`;
        resultDiv.style.color = 'black';
    });
});
