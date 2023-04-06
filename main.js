const productosArray =[
   {
      id:"vodka-sky-raspberry",
      titulo:"VODKA SKYY RASPBERRY",
      imagen: "./images/1810-skyy-raspberry-600x600.jpg",
      categoria:{
         nombre:"Bebida Blanca",
         id:"vodka"
      },
      precio: 2500
   },
   {
      id:"vodka-absolut",
      titulo:"VODKA ABSOLUT",
      imagen: "./images/1813-absolut-vodka-600x600.jpg",
      categoria:{
         nombre:"Bebida Blanca",
         id:"vodka"
      },
      precio: 3000
   },
   {
      id:"vodka-absolut-mango",
      titulo:"VODKA ABSOLUT MANGO",
      imagen: "./images/1860-absolut-mango-560x560.jpg",
      categoria:{
         nombre:"Bebida Blanca",
         id:"vodka"
      },
      precio: 3500
   },
   {
      id:"vodka-sky-citrus",
      titulo:"VODKA SKYY CITRUS",
      imagen: "./images/1811-skyy-citrus-300x300.jpg",
      categoria:{
         nombre:"Bebida Blanca",
         id:"vodka"
      },
      precio: 2500
   },
   {
      id:"vino-balbo",
      titulo:"VINO BALBO",
      imagen: "./images/102-vinas-de-balbo-tinto-1125cc-300x300.jpg",
      categoria:{
         nombre:"vino",
         id:"balbo"
      },
      precio: 700
   },
   {
      id:"fernet",
      titulo:"FERNET",
      imagen: "./images/fernet.jpg",
      categoria:{
         nombre:"Bebida Blanca",
         id:"vodka"
      },
      precio: 2000
   },
   {
      id:"coca-cola",
      titulo:"COCA COLA 2.25L",
      imagen: "./images/coca.jpg",
      categoria:{
         nombre:"gaseosa",
         id:"coca-cola"
      },
      precio: 500
   },
   {
      id:"pritty",
      titulo:"PRITTY 2.25L",
      imagen: "./images/pritty.jpg",
      categoria:{
         nombre:"gaseosa",
         id:"pritty"
      },
      precio: 350
   }

]

const contenedorProductos = document.querySelector("#contenedor-productos")

function cargarProductos(){
   productosArray.forEach(producto => {
      const div =document.createElement("div")
      div.classList.add("producto");
      div.innerHTML = `
      
      <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
      <div class="producto-detalles">
          <h3>${producto.titulo}</h3>
          <p class="producto-precio">${producto.precio}</p>
           <button class="producto-agregar" id="${producto.id}" >AGREGAR</button>
       </div>
     
      
      `
     
      contenedorProductos.append(div)
   })
}

cargarProductos(productos)


