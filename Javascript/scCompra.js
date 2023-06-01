function calcularPrecio()
{
        
    let cantEnt= document.getElementById("cantEntradas").value;
    let porcDesc=document.getElementById("porcDescuento").value;
    let descuento = (cantEnt*200)*porcDesc/100;
    let precioTotal= (cantEnt*200)-descuento;
    
    console.log("cant entradas " + cantEnt + "Descuento" + porcDesc)

    document.getElementById("costo").value="Total a pagar: $ "+ precioTotal;

    console.log("Precio total " + precioTotal);


}


function validarEmail(){
                
	// Obtener el valor del input email
	let email = document.getElementById('email').value;
	
	// Definir expresion regular a utilizar para validar el email
	let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Usar if elsa para realizar la validacion
	if( !validEmail.test(email) ){
		//alert("Email invalido, por favor reingrese email")
    document.getElementById("error").innerHTML="Email invalido, debe contener @ y dominio";
    document.getElementById("error").className="text-danger fst-italic m-1 p-1"
    
	}
  else
  {
    document.getElementById("error").innerHTML="";
  }
} 

function borrarResumen()
{
  document.getElementById("nom").innerHTML="";
  document.getElementById("ape").innerHTML="";
  document.getElementById("em").innerHTML="";
  document.getElementById("cantEntr").innerHTML="";
  document.getElementById("precioFinal").innerHTML="";

}


function mostrarResumen(){

  let nombre= document.getElementById("nombre").value;
  let apellido= document.getElementById("apellido").value;
  let email= document.getElementById("email").value;
  let cantEntradas= document.getElementById("cantEntradas").value;
  let precio= document.getElementById("costo").value;

  document.getElementById("nom").innerHTML=nombre;
  document.getElementById("ape").innerHTML=apellido;
  document.getElementById("em").innerHTML=email;
  console.log(cantEntradas);
  document.getElementById("cantEntr").innerHTML="Cantidad de entradas: " + cantEntradas;
  document.getElementById("precioFinal").innerHTML=precio;

 
}
