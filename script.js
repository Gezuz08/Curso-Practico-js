const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Shupala Shastin!! <br> Sapeeeee!!'; // innerHTML permite modificar el html desde javascript
h1.innerText = 'Shupala Shastin!! <br> Sapeeeee!!'; // innerText permite modificar el texto desde javascript evitando intenciones malisiosas de cambiar el html
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class','FCGezuz');

h1.classList.add('rojo');
h1.classList.remove('GezuzFC');
// h1.classList.toogle('rojo');
// h1.classList.contains('rojo');

input.value = "Shupala";

const img = document.createElement('img'); //Crea un nuevo elemento en JS
img.setAttribute('src','https://www.citypng.com/public/uploads/preview/-21602265893lumslgnfev.png')
console.log(img);

pid.innerHTML="";
pid.appendChild(img);


