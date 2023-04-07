const productos =[
   {
      id:"vodka-sky-raspberry",
      titulo:"VODKA SKYY RASPBERRY",
      imagen: "./images/1810-skyy-raspberry-600x600.jpg",
      categoria:{
         nombre:"vodka",
         id:"vodka"
      },
      precio: 2500
   },
   {
      id:"vodka-absolut",
      titulo:"VODKA ABSOLUT",
      imagen: "./images/1813-absolut-vodka-600x600.jpg",
      categoria:{
         nombre:"vodka",
         id:"vodka"
      },
      precio: 3000
   },
   {
      id:"vodka-absolut-mango",
      titulo:"VODKA ABSOLUT MANGO",
      imagen: "./images/1860-absolut-mango-560x560.jpg",
      categoria:{
         nombre:"vodka",
         id:"vodka"
      },
      precio: 3500
   },
   {
      id:"vodka-sky-citrus",
      titulo:"VODKA SKYY CITRUS",
      imagen: "./images/1811-skyy-citrus-300x300.jpg",
      categoria:{
         nombre:"vodka",
         id:"vodka"
      },
      precio: 2500
   },
   ,
   {
      id:"fernet",
      titulo:"FERNET",
      imagen: "./images/fernet.jpg",
      categoria:{
         nombre:"fernet",
         id:"fernet"
      },
      precio: 2000
   },
   
 

]

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".botones-categorias")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")






function cargarProductos(productosElejidos){
   
   contenedorProductos.innerHTML = "";
   
   productosElejidos.forEach(producto => {
      const div =document.createElement("div")
      div.classList.add("producto");
      div.innerHTML = `
      
      <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
      <div class="producto-detalles">
          <h3 class="producto-precio >${producto.titulo}</h3>
          <p class="producto-precio">$${producto.precio}</p>
           <button class="producto-agregar" id="${producto.id}" >AGREGAR</button>
       </div>
     
      
      `
      
      contenedorProductos.append(div)
   })
   actualizarBotonesAgregar()
   console.log(botonesAgregar)
}

cargarProductos(productos)

botonesCategorias.forEach(boton => {
   boton.addEventListener("click", (e) => {

       botonesCategorias.forEach(boton => boton.classList.remove("active"));
       e.currentTarget.classList.add("active");

       if (e.currentTarget.id != "todos") {
           const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
           tituloPrincipal.innerText = productoCategoria.categoria.nombre;
           const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
           cargarProductos(productosBoton);
         } else {
           tituloPrincipal.innerText = "Todos los productos";
           cargarProductos(productos);
      }

   })
});





function actualizarBotonesAgregar(){
   botonesAgregar = document.querySelectorAll(".producto-agregar")
   botonesAgregar.forEach(boton =>{
      boton.addEventListener("click",agregaralCarrito);
   })
}

const productosEnCarrito =[]

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if (productosEnCarritoLS) {
   productosEnCarrito = JSON.parse(productosEnCarritoLS);
   
} else {
   productosEnCarrito = [];
}



function agregaralCarrito(){
   const idBoton = e.currentTarget.id
   const productoAgregado = productos.find(producto => producto.id === idBoton)

   if(productosEnCarrito.some(producto => producto.id === idBoton)){
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
   }else{
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado)
   }

   localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}