let carrito = [];
let total = 0;

function agregarProducto(nombre, precio) {
    let productoExistente = carrito.find(item => item.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
    }

    // 2. El total general siempre suma el precio de la nueva unidad
    total += precio;

    mostrarCarrito();
}

function mostrarCarrito() {
    let lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";

    for (let i = 0; i < carrito.length; i++) {
        let item = document.createElement("li");


        let subtotal = carrito[i].precio * carrito[i].cantidad;

        //Mostramos el nombre, la cantidad (x2) y el subtotal
        item.innerHTML = `
            ${carrito[i].nombre} <strong>(x${carrito[i].cantidad})</strong> - S/. ${subtotal}
        `;

        lista.appendChild(item);
    }

    document.getElementById("total").innerText = total;
}

function eliminarProducto(posicion) {
    total -= carrito[posicion].precio;
    carrito[posicion].cantidad -= 1;
    if (carrito[posicion].cantidad === 0) {
        carrito.splice(posicion, 1);
    }

    mostrarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    mostrarCarrito();
}