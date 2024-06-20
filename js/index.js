const ingresoSeccion = document.getElementById("ingresoSeccion");
const ingresoH1 = document.createElement("h1");
const ingresoDiv = div;
ingresoH1.textContent = "Bienvenido a Rame, ingrese sus datos:";
main.appendChild(ingresoH1);
main.appendChild(ingresoSeccion)
ingresoSeccion.appendChild(ingresoDiv);
const formulario = document.getElementById("formulario");

const formBoton = document.getElementById("formBoton");

formBoton.onclick = () => {

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario registrado",
        showConfirmButton: false,
        timer: 1500
    });

}

localStorage.setItem("login", JSON.stringify(formulario));





