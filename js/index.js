const productos = [
    { id: 1, modelo: "Maceta Ancha", color: "Azul", tamanio: "16cm", precio: 2000, img: "./img/1.jpg" },
    { id: 2, modelo: "Maceta Ancha", color: "Naranja", tamanio: "16cm", precio: 2000, img: "./img/2.jpg" },
    { id: 3, modelo: "Maceta Redonda", color: "Violeta", tamanio: "12cm", precio: 1000, img: "./img/3.jpg" },
    { id: 4, modelo: "Maceta Cono", color: "Combinado", tamanio: "14cm", precio: 1500, img: "./img/4.jpg" }
];

let carrito = cargarDelLocalStorage();

// Funcion para agregar un producto al carrito
function agregarCarrito(productoId, cantidad) {
    const producto = productos.find(p => p.id === productoId);

    if (!producto) {
        Swal.fire({
            icon: "error",
            title: "Producto no encontrado :/",
            text: "Parece que hay un error"
        });
        return;
    }

    const carritoItem = carrito.find(item => item.id === productoId);

    if (carritoItem) {
        carritoItem.cantidad += cantidad;
        carritoItem.subtotal = carritoItem.cantidad * carritoItem.precio;
    } else {
        carrito.push({
            id: producto.id,
            modelo: producto.modelo,
            precio: producto.precio,
            cantidad: cantidad,
            subtotal: cantidad * producto.precio
        });
    }

    guardarCarritoEnLocalStorage();
    renderizarCarrito();
    actualizarBurbujaCarrito();

}

// Funcion para renderizar el carrito
function renderizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';

    carrito.forEach(item => {
        const carritoItemDiv = document.createElement('div');
        carritoItemDiv.classList.add("item");
        carritoItemDiv.innerHTML = `
            <p>Nombre del producto: ${item.modelo}, Cantidad: ${item.cantidad}, Precio Total: $${item.subtotal}</p>
        `;
        carritoDiv.appendChild(carritoItemDiv);
    });

    // Boton de "Vaciar Carrito"
    const vaciarCarritoBtn = document.createElement('button');
    vaciarCarritoBtn.textContent = 'Vaciar Carrito';
    vaciarCarritoBtn.classList.add('vaciarCarritoBtn');
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    carritoDiv.appendChild(vaciarCarritoBtn);

    // Boton de "Enviar Carrito"
    const enviarCarritoBtn = document.createElement('button');
    enviarCarritoBtn.textContent = 'Enviar Carrito';
    enviarCarritoBtn.classList.add('enviarCarritoBtn');
    enviarCarritoBtn.addEventListener('click', enviarCarrito);
    carritoDiv.appendChild(enviarCarritoBtn);
}

// Funcion para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarritoEnLocalStorage();
    renderizarCarrito();
    actualizarBurbujaCarrito();

    Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Tu carrito ahora está vacío",
        showConfirmButton: false,
        timer: 1000
    });
}

// Funcion para guardar el carrito en el localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Funcion para cargar el carrito desde el localStorage
function cargarDelLocalStorage() {
    const carritoData = localStorage.getItem('carrito');
    return carritoData ? JSON.parse(carritoData) : [];
}

// Funcion para mostrar los productos
function renderizarProductos() {
    const productosLista = document.getElementById('productosLista');
    productosLista.innerHTML = '';
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add("item");
        productoDiv.innerHTML = `
            <div class="productoNombre"><h2>${producto.modelo}</h2></div> 
            <p class="productoColor">Color: ${producto.color}</p>
            <p class="productoTamanio">Medida: ${producto.tamanio}</p>
            <img class="productoImg" src="${producto.img}">
            <div class="productoPrecio"><h2>$${producto.precio}</h2></div>
            <button class="agregarCarrito" onclick="agregarCarrito(${producto.id}, 1)">Agregar al Carrito</button>
        `;
        productosLista.appendChild(productoDiv);
    });
}

// Funcion para mostrar los productos y el carrito
function mostrarProductos() {
    // Creacion de la seccion "productosSeccion"
    const productosSeccion = document.createElement('div');
    productosSeccion.id = 'productosSeccion';
    const productosLista = document.createElement('div');
    productosLista.id = 'productosLista';
    const carritoDiv = document.createElement('div');
    carritoDiv.id = 'carrito';
    productosSeccion.appendChild(productosLista);
    productosSeccion.appendChild(carritoDiv);
    main.appendChild(productosSeccion);

    renderizarProductos();
    renderizarCarrito();
}

// Crear la burbuja del carrito para la esquina superior derecha
function crearBurbujaCarrito() {
    const burbuja = document.createElement('div');
    burbuja.id = 'burbujaCarrito';
    burbuja.classList.add('burbujaCarrito');
    burbuja.innerHTML = `
        <button id="btnBurbujaCarrito">
            <span class="icon">&#128722;</span>
            <span id="totalProductos">${carrito.reduce((acc, item) => acc + item.cantidad, 0)}</span>
        </button>
    `;
    document.body.appendChild(burbuja);

    document.getElementById('btnBurbujaCarrito').addEventListener('click', () => {
        const carritoDiv = document.getElementById('carrito');
        carritoDiv.style.display = carritoDiv.style.display === 'none' || carritoDiv.style.display === '' ? 'block' : 'none';
    });

    document.getElementById('totalProductos').textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
}

function actualizarBurbujaCarrito() {
    const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById('totalProductos').textContent = totalProductos;
}

// Funcion para enviar el carrito usando fetch
async function enviarCarrito() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ carrito })
        });
        const result = await response.json();
        Swal.fire({
            icon: 'success',
            title: 'Carrito enviado con exito'
        });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error al enviar el carrito',
            text: error.message
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Creacion de la seccion "ingresoSeccion"
    const ingresoSeccion = document.createElement('div');
    ingresoSeccion.id = 'ingresoSeccion';
    const ingresoH1 = document.createElement('h1');
    ingresoH1.textContent = "Bienvenido! Ingrese sus datos:";
    const formulario = document.createElement('form');
    formulario.id = 'formulario';
    formulario.innerHTML = `
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required><br>
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required><br>
        <button type="button" id="formBoton">Enviar</button>
    `;
    ingresoSeccion.appendChild(ingresoH1);
    ingresoSeccion.appendChild(formulario);
    main.appendChild(ingresoSeccion);

    // Formulario de ingreso
    const formBoton = document.getElementById('formBoton');
    formBoton.onclick = () => {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;

        if (nombre && apellido) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Usuario creado!",
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                localStorage.setItem("login", JSON.stringify({ nombre, apellido }));
                ingresoSeccion.style.display = 'none';
                mostrarProductos();
                crearBurbujaCarrito();
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Algo no salio bien',
                text: 'Completa todos los campos del formulario!',
            });
        }
    };
});