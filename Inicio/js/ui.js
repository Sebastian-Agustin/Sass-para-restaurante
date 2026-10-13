const lista = document.getElementById('lista-productos');
const formProducto = document.getElementById('form-producto');

const renderizarProductos = () => {
    lista.innerHTML = ''; // Limpiar la lista antes de renderizar
    
    productos.forEach( (producto) => {
            const li = document.createElement('li');
                li.className = "producto"; //le agrego una clase css
                lista.appendChild(li);//adjunto el Li a la ul

            const span = document.createElement('span');
                span.textContent = `Nombre: ${producto.nombre}, Precio: ${producto.precio}`;
                li.appendChild(span); //adjunto el span al li
            
            const botonEditar = document.createElement('button');
                botonEditar.textContent = 'Editar';
                botonEditar.className = "btn btn-editar";

                botonEditar.addEventListener('click', () => {
                    prompt(`Editar producto con id: ${producto.id}\nNombre actual: ${producto.nombre}\nPrecio actual: ${producto.precio}\nIngrese el nuevo nombre:`)
                    console.log(`Editar producto con id: ${producto.id}`);
                });
                li.appendChild(botonEditar); //adjunto el botón al li

            const botonEliminar = document.createElement('button');
                botonEliminar.textContent = 'Eliminar';
                botonEliminar.className = "btn btn-eliminar";
                

                botonEliminar.addEventListener('click', () => {
                    eliminarProducto(producto.id);
                    renderizarProductos(); //llamo a la funcion para renderizar los productos en la lista
                });
                li.appendChild(botonEliminar);
            });
};

formProducto.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value); //parsefloat convierte el string en un numero decimal
    
    crearProducto(nombre, precio);
    renderizarProductos(); //llamo a la funcion para renderizar los productos en la lista

    formProducto.reset(); //reseteo el formulario para que quede vacio
});
