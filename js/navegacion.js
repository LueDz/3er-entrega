//Constantes Globales

const body = document.body;
const main = document.getElementById("main");
const header = document.getElementById("header");
const footer = document.getElementById("footer")
const nav = document.createElement("nav");
const navDiv = document.createElement("div");
const li = document.createElement("li");
const ul = document.createElement("ul");
const inicio = document.createElement('a');
const img = document.createElement("img");
const p = document.createElement("p");
const boton = document.createElement("button");
const div = document.createElement("div");
const section = document.createElement("section");
const divFooter = document.createElement("div");
const anio = new Date().getFullYear(); 


//Barra de navegacion

header.appendChild(navDiv);
navDiv.appendChild(nav);
nav.appendChild(ul);
navDiv.className = 'navBar';

inicio.href = '/';
inicio.appendChild(img);
img.src = 'img/logo1.png';
img.alt = 'Rame';
li.appendChild(inicio);
ul.appendChild(li);




//Footer

footer.appendChild(divFooter);
divFooter.appendChild(p);
divFooter.innerHTML = 'Lucas Diaz | CoderHouse | ' + anio;