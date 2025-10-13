
console.log('JS cargado correctamente');

let count = 0; //variable que almacena el contador, que se irá modificando
console.log('Valor inicial del contador: ', count);

//Declaración constantes
const counter = document.querySelector('#counter');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        debugger;
        console.log('Botón pulsado: ', event.currentTarget.classList.value);

        if (event.currentTarget.classList.contains('increase')) {
            count++;
        } else if (event.currentTarget.classList.contains('decrease')) {
            count--;
        } else {
            count = 0;
        }
        counter.textContent = count;
        console.log('Nuevo valor de count: ', count);

        if(count > 0) {
            counter.style.color = 'green'
        } else if (count < 0) {
            counter.style.color = 'red'
        } else {
            counter.style.color = 'black'
        }
    });
})




