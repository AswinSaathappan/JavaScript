const button = document.querySelector('button');

// Event listener
button.addEventListener('click', Calculate);

function Calculate() {
    const operand1 = Number(document.getElementById("operand1").value);
    const oper = document.getElementById("operator").value;
    const operand2 = Number(document.getElementById("operand2").value);
    const result = document.getElementById('result');

    switch (oper) {
        case '+':
            result.innerHTML = operand1 + operand2;
            break;
        case '-':
            result.innerHTML = operand1 - operand2;
            break;
        case '*':
            result.innerHTML = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                result.innerHTML = "Cannot divide by zero!";
            } else {
                let div = operand1 / operand2 
                result.innerHTML = div.toFixed(3);
            }
            break;
        default:
            result.innerHTML = "Invalid operator!";
            break;

          
    }
}
