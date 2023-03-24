
const carrito = [] 


const productos = [
   {nombre: "ferne", codigo: 1, tipo: "licor", precio: 2500},
   {nombre: "vodka", codigo: 2, tipo: "bebida blanca", precio: 6000},
   {nombre:"valvo" ,codigo: 3, tipo: "vino", precio: 700},
   {nombre:"gin tonic" ,codigo: 4, tipo: "bebida blanca", precio: 2500},
   {nombre:"ron ",codigo: 5, tipo: "bebida blanca", precio: 800}
]




const mensajeConsulta = "Elejí tu bebida mediante un codigo 1-5"
/* funciones PRINCIPALES */



function verCarrito(){
   console.table(carrito)
}

function finalizarPedido(){
   if (carrito.length > 0 ) {
     const  eccomerse = new Pedido(carrito)
      alert(`El costo del carrito es de $ ${eccomerse.saberPrecio()}`)
      let respuesta = confirm("Desea realizar el pago?")
         if(respuesta){
            alert(eccomerse.confirmarPedido())
            carrito.length = 0
         }else{
            alert("No hay bebidas en el carrito  ")
         }
   }
}


function buscarProducto(codigo){
   let resultado = productos.find((producto)=> producto.codigo === parseInt(codigo))
          return resultado
   }



function comprarProductos(){
   
   let codigo = prompt(mensajeConsulta)
   if (!parseInt(codigo)) {
      alert("Error en el codigo")
      let respuesta = confirm("Desea intentar de nuevo? ")
      if(respuesta){
         comprarProductos()
       }
      return
   
   }if(codigo == undefined){
      alert("Error en el codigo ingresado")
      let respuesta = confirm("Queres intentar otra vez?")
      if(respuesta){

         comprarProductos()
      }
   }else{
      let productoElejido = buscarProducto(codigo)
      if(productoElejido !== undefined) {
         alert(`${productoElejido.nombre} fue agregado al carrito`)
         carrito.push(productoElejido)
         let respuesta = confirm("Queres llevar otro producto?")
         if(respuesta){
            comprarProductos()
         }else{
            finalizarPedido()
         }
      }
   }
}
   


