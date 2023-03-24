class Pedido{
   constructor(carrito){
       this.carrito = carrito
   }
   saberPrecio(){
       if(this.carrito.length > 0){
           return this.carrito.reduce((acu, producto)=> acu + producto.precio, 0)
           
       }else{
           return 'Ha ocurrido un error'
       }
   }
   confirmarPedido(){
       if (this.saberPrecio() !== "Ha ocurrido un error") {
           return `Confirmamos el pago de $ ${this.saberPrecio()}. \n Muchas gracias por comprar en BarricasBebidas `
       
       }else{
           return `Error en la compra`
       }
   }
}