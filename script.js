const pin = "1234";
const pinIngresado = prompt("Ingrese pin de supervisor")

if (pinIngresado === pin) {
    alert("Pin Correcto" +"\n" +"Ingrese la palabra FIN para finalizar la consulta")
    ingresarCodigo();
} else {
    alert("Pin invalido");
}

function ingresarCodigo() {
    let codigo = "";
    let historialConsulta= "";
    while (codigo != "FIN") {
        codigo = (prompt("Ingrese el código del artículo"));
        switch (codigo) {
            case "323578":
                alert("Producto consultado:"+"\n"+"Aceite De Girasol Natura 1.5L"+"\n"+"$545,97");
                historialConsulta += "Aceite De Girasol Natura 1.5L - $545,97" + "<br>";
                break;
            case "870231":
                alert("Producto consultado:"+"\n"+"Azucar Ledesma Light 500 Gr"+"\n"+"$323,78");
                historialConsulta += "Azucar Ledesma Light 500 Gr - $323,78" + "<br>";
                break;
            case "783452":
                alert("Producto consultado:"+"\n"+"Gaseosa Coca-cola Sabor Original 2.25 L"+"\n"+"$688,42");
                historialConsulta += "Gaseosa Coca-cola Sabor Original 2.25 L - $688,42 " + "<br>";
                break;
            case "185364":
                alert("Producto consultado:"+"\n"+"Harina Pureza Ultra Refinada 0000 Vitamina D 1kg"+"\n"+"$224,33");
                historialConsulta += "Harina Pureza Ultra Refinada 0000 Vitamina D 1kg - $224,33 " + "<br>";
                break;
            case "FIN":
                break;
            default:
                alert("El código ingresado no corresponde a ningun producto, intentelo denuevo.")
        }

    }
    document.write("<br>"+"HISTORIAL DE CONSULTA"+ "<br>" + historialConsulta);
 
}
