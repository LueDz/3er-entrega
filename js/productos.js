
const productos = [
    { id: 1, modelo: "Maceta Ancha", color: "Azul", tamanio: "16cm", precio: 2000, img: "./img/1.jpg" },
    { id: 2, modelo: "Maceta Ancha", color: "Naranja", tamanio: "16cm", precio: 2000, img: "./img/2.jpg" },
    { id: 3, modelo: "Maceta Redonda", color: "Violeta", tamanio: "12cm", precio: 1000, img: "./img/3.jpg" },
    { id: 4, modelo: "Maceta Cono", color: "Combinado", tamanio: "14cm", precio: 1500, img: "./img/4.jpg" }
];

let carrito = cargarDelLocalStorage();

function agregarCarrito(productoId, cantidad) {
    const producto = productos.find(p => p.id === productoId)
    if (!producto) {
        console.error("Producto no encontrado");
        return
    }

    const carritoItem = carrito.find(item => item.id === productoId)

    if (carritoItem) {
        carritoItem.cantidad += cantidad;
        carritoItem.subtotal = carritoItem.cantidad * carritoItem.precio
    } else {
        carrito.push(
            {
                id: producto.id,
                modelo: producto.modelo,
                precio: producto.precio,
                cantidad: cantidad,
                subtotal: cantidad * producto.precio
            }
        )
    }

    guardarCarritoEnLocalStorage();
    renderizarCarrito();
}

function renderizarProductos() {
    const productosLista = document.getElementById('productosLista');
    productosLista.innerHTML = '';
    productos.forEach(producto => {
        const productoDiv = div;
        productoDiv.innerHTML = `
        <div class="productoNombre"> <h2>${producto.modelo}</h2> </div> 
        <p class="productoColor"> Color: ${producto.color} </p>
        <p class="productoTamanio"> Medida: ${producto.tamanio} </p>
        <img class="productoImg" src= ${producto.img}> 
        <div class="productoPrecio"> <h2>$${producto.precio}</h2> </div>
        <button onclick= "agregarCarrito(${producto.id},1)">Agregar al Carrito</button>
        
        `;

        productosLista.appendChild(productoDiv);

    })
}

function renderizarCarrito (){
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    carrito.forEach(item => {
        const carritoItemDiv = div;
        carritoItemDiv.innerHTML = `
            <p>ID: ${item.id}, Nombre: ${item.modelo}, Cantidad: ${item.cantidad}, Precio Total: $${item.subtotal}</p>
        `;
        carritoItemDiv.appendChild(carritoItemDiv);
    });
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

function cargarDelLocalStorage() {
    const carritoData = localStorage.getItem('carrito');
    return carritoData ? JSON.parse(carritoData) : [];
};

document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    renderizarCarrito();
});
