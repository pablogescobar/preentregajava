let nombre = prompt(" ¿cual es tu nombre ");
nombre = nombre.toUpperCase();
alert("bienvenido a chevecha " + "" + nombre);
//alerta
//alert("Bienvenido a nuestro ecommerce ", alert(nombre));
let marca = prompt("ingrese que marca de cerveza que desea comprar: \n1 Quilmes\n2 Corona \n3 Palermo");

let h1 = 1;
let h2 = 2;
let h3 = 3;
const seleccion = prompt('seleccione una opcion: 1 , 2 o 3');
if (seleccion === '1') {
   console.log('usted ha seleccionado quilmes');
} else if (seleccion === '2') {
   // console.log('usted ha seleccionado corona');
   alert("usted ha seleccioado corona")
} else if (seleccion === '3') {
   alert("usted ha seleccioado palermo")
   //console.log ('usted ha seleccionado palermo');
} else {
   console.log('ese dato no existe');
}
alert("Muchas gracias por su compra¡¡¡");














