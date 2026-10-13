const productos = [
    { id: 1, nombre: "Remeras", precio: 100 },
    { id: 2, nombre: "Pantalones", precio: 200 },
    { id: 3, nombre: "Camisetas", precio: 300 }
]; //array de productos, con objetos dentro de esa array con las propiedades del producto

let proximoId = 4;

//recorro el array de productos con un forEach y muestro por consola el nombre y precio del producto
//la variable producto es el objeto que estoy recorriendo en ese momento, y puedo acceder a sus propiedades con producto.nombre y producto.precio
const mostrarProductos = () => {
    productos.forEach((producto) => {
        console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
    });
};


//creo una funcion que reciba un nombre y un precio, y cree un nuevo producto con esos valores, le asigno un id unico sumando 1 al largo del array de productos, y lo agrego al array de productos

const crearProducto = (nombre, precio) => {
    const id = proximoId;
    proximoId++; 
    
    const producto = {id, nombre, precio}; //creo un objeto producto con las propiedades id, nombre y precio
    
    productos.push(producto); //agrego el nuevo producto al array de productos
    
    console.log(`Producto creado: ${producto.nombre}, Precio: ${producto.precio}, id: ${producto.id}`);
};

const editarProducto = (id, nombre, precio) =>{
    //primero busco el producto con el id que me pasaron por parametro, y si lo encuentro, le cambio el nombre y el precio por los que me pasaron por parametro
    const parseoId = parseInt(id, 10); //parseo el id a numero para poder compararlo con el id del producto
    //que le agregue un 10 es una buena practica para avisar que es un numero decimal, aunque en este caso no es necesario porque el id es un numero entero
    const producto = productos.find((p) => p.id === parseoId); //busco el producto con el id que me pasaron por parametro
    
    if(producto){
        producto.nombre = nombre; //cambio el nombre del producto por el que me pasaron por parametro
        producto.precio = precio;
        console.log(`Producto editado: ${producto.nombre}, Precio: ${producto.precio}, id: ${producto.id}`);
    }else{
        console.log(`Producto con id ${parseoId} no encontrado`);
    }
};

const eliminarProducto = (id) => {
    const parseoId = parseInt(id, 10);
    
    const index = productos.findIndex((p)=> p.id === parseoId); //busco el index del producto con el id que me pasaron por parametro
    
    if(index !== -1){
        const productoEliminado = productos.splice(index, 1);//le estoy dando la posicion y la cantidad de productos que voy a eliminar
        console.log(`Producto eliminado: ${productoEliminado[0].nombre}, Precio: ${productoEliminado[0].precio}, id: ${productoEliminado[0].id}`);
    }else{
        console.log(`Producto con id ${parseoId} no encontrado`);
    }
};

eliminarProducto(2); //elimino el producto con id 2
crearProducto("Zapatillas", 400); //creo un nuevo producto con nombre Zapatillas y precio 400
crearProducto("Gorros", 150); //creo un nuevo producto con nombre Gorros y precio 150
console.log(productos); //muestro el array de productos por consola