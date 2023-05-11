function calcularPrecio()
{
        
    let cantEnt= document.getElementById("cantEntradas").value;
    let porcDesc=document.getElementById("porcDescuento").value;
    let descuento = (cantEnt*1000)*porcDesc/100;
    let precioTotal= (cantEnt*1000)-descuento;
    
    console.log("cant entradas " + cantEnt + "Descuento" + porcDesc)

    document.getElementById("costo").value=precioTotal;

    console.log("Precio total " + precioTotal);


}
