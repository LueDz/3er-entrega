const productos2 = [
    { id: 1, modelo: "Maceta Ancha", color: "Azul", tamanio: "16cm", precio: 2000, img: "./img/1.jpg" },
    { id: 2, modelo: "Maceta Ancha", color: "Naranja", tamanio: "16cm", precio: 2000, img: "./img/2.jpg" },
    { id: 3, modelo: "Maceta Redonda", color: "Violeta", tamanio: "12cm", precio: 1000, img: "./img/3.jpg" },
    { id: 4, modelo: "Maceta Cono", color: "Combinado", tamanio: "14cm", precio: 1500, img: "./img/4.jpg" }
];


for (const producto of productos2 ) {

    let productoContainer = document.createElement('div');

    productoContainer.innerHTML = ` <div class="productoNombre"> <h2>${producto.modelo}</h2> </div> 
    <p class="productoColor"> Color: ${producto.color} </p>
    <p class="productoTamanio"> Medida: ${producto.tamanio} </p>
    <img class="productoImg" src= ${producto.img}> 
    <div class="productoPrecio"> <h2>$${producto.precio}</h2> </div>
    <div> <button class="productoBoton">agregar</button></div>
    `

    productoSeccion.appendChild(productoContainer)

};

//Carrito

const productoBoton = document.createElement("button");
productoBoton.textContent = 'Agregar al carrito';
productoBoton.type = 'button';
carritoSeccion.appendChild(productoBoton)


const productobtn = document.getElementsByClassName("productoBoton")

productoBoton.onclick = () => {

    Swal.fire({
        title: "Queres agregar este producto al carrito?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Agregar",
        denyButtonText: `Cancelar`
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire("Guardado!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("No se sumo a tu compra", "", "error");
        }
    });
}
