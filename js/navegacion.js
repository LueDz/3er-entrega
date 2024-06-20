//Constantes Globales

const body = document.body;
const main = document.getElementById("main");
const header = document.getElementById("header");
const footer = document.getElementById("footer")
const nav = document.createElement("nav");
const navDiv = document.createElement("div");
const navLinks = ["Index", "Productos", "Contacto"];
const li = document.createElement("li");
const ul = document.createElement("ul");
const inicio = document.createElement('a');
const img = document.createElement("img");
const p = document.createElement("p");
const boton = document.createElement("button");
const div = document.createElement("div");
const section = document.createElement("section");

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

for (const navPages of navLinks) {
    const navLi = document.createElement('li');
    navLi.innerHTML = `<a href="${navPages.toLowerCase()}.html" >${navPages}</a>`;
    ul.appendChild(navLi);
    navLi.className = 'navPages'

};


