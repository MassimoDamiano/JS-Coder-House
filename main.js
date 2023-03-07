const mensajeConsulta = "Ingresa el codigo de bebida para saber su precio: \n" +
                        "a) Promo Fernet y Coca Cola 2.5L \n" +
                        "b) Vodka absolut \n" +
                        "c) Promo Vino balbo y Prity 2.25L \n" +
                        "d) Gin Tonic \n" +
                        "e) Ron Cayman de Uva" 

continuar = true

function consultarPrecio(){
   let opcionBebida = prompt(mensajeConsulta).toLocaleLowerCase().trim()
   
   if(opcionBebida != "a" && opcionBebida != "b" && opcionBebida != "c" && opcionBebida != "d" && opcionBebida != "e"){
        alert("Este valor no esta permitido")
   }else{
      switch(opcionBebida){
         case "a":
            alert("La promo de fernet con coca sale 3500$")
            break
         case "b":
            alert("El vodka absolut sale 6000$")
            break
         case "c":
            alert("La promo del vinaso sale 2500$")
            break
         case "d":
            alert("El gin tonic sale 1800$")
            break
         case "e":
            alert("El cayman de uva sale 700$")
            alert("Suerte con la resaca")
            break
         default:
            alert("Error... algo salio mal")
      }
   }
}
function preguntar(){
   while(continuar){
      consultarPrecio()
      continuar = confirm("Queres seguir consultando precios?")

   }
}