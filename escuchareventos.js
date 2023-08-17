const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', SubmitEvent);

function SubmitEvent(event) {
    event.preventDefault();// Cancela el submit refresh
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado = " + sumaInputs;
}

 