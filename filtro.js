// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];
  
//J: la funcion por si sola no imprime nada  que no muetsra la lista de los productos?
//displayProducts(productos); // mafer Mostrar productos de la lista 
console.log(productos); // imprime el objeto

//D: saque las variables fuera de la función display para que tambien las pueda tomar el botón
//ampliar su scope
const li = document.querySelector(".lista-de-productos"); //Jan: Faltaba el .
const $i = document.querySelector('.input'); //Jan: toma desde el id/clase input

//Funcion para mostrar los productos de la lista
const displayProductos = (productos) => {

    // Jan: Limpiar la lista antes de agregar productos
    li.innerHTML = '';

  //Jan: Recorre la lista 
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

 


}

//Jan: lo meti en la funcion a ver si jala :v //Voy a sacar la func
//D:Se saco la función fuera del onclick y se agrego el to lower case para al momento del filtrado no interfiera si se escribio en mayúscula
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto));
}  


//Jan: Funcion que muestra los productos inciales
displayProductos(productos)


//JAn: Boton de filtro
const botonDeFiltro = document.querySelector("button");  

botonDeFiltro.onclick = function() {
  //JAn. creo que es el while el que causa el infinito ...    ///Es lo que te iba a decir !! 
  
   // li.removeChild(li.firstChild); Jan: Esta elimina el primer elemento :v 
  //D: se agrego el tolowerCase para que muestre los resultados independientemente de si el usuario busca con mayus
    const texto = $i.value.toLowerCase();
  console.log(texto);

  const productosFiltrados = filtrado(productos, texto );
  //D: se agrega la función para mostrar los productos que haya buscado el usuario
  displayProductos(productosFiltrados);


  //Jan: Hay un error en este for..... se imprime infinito y no se x khe :v 
  /* Se elimino el for que estaba aqui por que era redundante*/
    


}




