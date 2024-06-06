//Array
const destinos = [
    { id: 1, dias: 7, lugar: "Bariloche", img: "./img/1.jpg" },
    { id: 2, dias: 9, lugar: "San Rafael", img: "./img/2.jpg" },
    { id: 3, dias: 5, lugar: "Cosquin", img: "./img/3.jpg" }
];

//Constructor
class PersonaConstructor {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

persona = () => {
    let nombre = prompt("Ingrese su nombre");
    let edad = parseInt(prompt("Ingrese su edad"));
    let ciudad = prompt("Ingrese su ciudad de residencia");
    const user = new PersonaConstructor(nombre, edad, ciudad);
    return user;
}
const usuario = persona();

//Variables y DOM
let seccion_destinos = document.getElementById("seccion_destinos");
let contenedorGral = document.getElementById("contenedorGral");

let h4txt = document.createElement("h4");
h4txt.innerHTML = `Nombre: ${usuario.nombre} - Edad: ${usuario.edad} - Ciudad: ${usuario.ciudad}`;
seccionDestinos.appendChild(h4txt);

//For...Of
for (const destino of destinos) {
    let container = document.createElement('div');
    container.innerHTML = `
                        <div class="destinoNombre"> <h2>${destino.lugar}</h2> <input type="checkbox"> </div> 
                        <div class= "destinoDias"> Cantidad de dias: ${destino.dias}</div>
                        <div class="destinoImg">
                        <img src= "${destino.img}" alt= "${destino.lugar}" class="destinoImg"/></div>`;

    seccionDestinos.appendChild(container);

}

