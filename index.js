//PARTE 1
// const parrafo = document.getElementById('parrafo');
// document.write(parrafo + '<br>'); //muestra [object HTMLParagraphElement], lo cual es un objeto

// const parrafoCollection = document.getElementsByTagName('p'); //casi nunca se usa este metodo de selección
// document.write(parrafoCollection + '<br>'); //muestra [object HTMLParagraphCollection], que no es un array
// document.write(parrafoCollection[0] + '<br>'); //muestra ParagraphElement
// document.write(parrafoCollection[1].textContent + '<br><br>'); //muestra propiedad texto del ParagraphElement

// //. selecciona clase, # selecciona id
// const parrafoPrimer = document.querySelector("#parrafo"); //selecciona el primer elememto de id "parrafo"
// document.write(parrafoPrimer+"<br>"); //retorna [object HTMLParagraphElement] 
// document.write(parrafoPrimer.textContent+"<br><br>"); //muestra propiedad texto del ParagraphElement

// const parrafoClase = document.querySelector(".clase"); //selecciona el primer elememto de clase "parrafo"
// document.write(parrafoClase+"<br>"); //retorna [object HTMLParagraphElement]
// document.write(parrafoClase.textContent+"<br><br>"); //muestra propiedad texto del ParagraphElement

// const parrafoClaseAll = document.querySelectorAll(".clase");
// document.write(parrafoClaseAll+"<br>"); //retorna [object NodeList], que no es un array
// document.write(parrafoClaseAll[2].textContent+"<br><br>"); //muestra propiedad texto del ParagraphElement


//PARTE 2
// const rangoEtario=document.querySelector(".rangoEtario");
// document.write(rangoEtario)
// rangoEtario.setAttribute("type", "color") //en vez de color puede ir cualquier cosa, si esa cosa no es un type, entonces se muestra una caja de entrada input
// const type=rangoEtario.getAttribute("type")
// document.write(" "+type)//muestra el tipo del atributo

// //rangoEtario.removeAttribute("type") //remueve el atributo type


//PARTE 3
// const titulo=document.querySelector(".titulo");
// titulo.setAttribute("contentEditable","true") //Se puede hacer en cualquier sitio web
// titulo.setAttribute("dir","rtl") //ltr, rtl
// //titulo.setAttribute("hidden","false") //true //comentar o remover
// titulo.setAttribute("tabindex","0")//permite hacer focus

// document.querySelector(".as");//no fue necesario hacer focus

// titulo.setAttribute("title","cambiado el title")//cambiar title 

//PARTE 4
// const input=document.querySelector(".input-normal"+"<br><br>");
// document.write(input.className);


// document.write(input.value); //no sirve
// document.write(input.type="number");

// const inputArchivo=document.querySelector(".input-archivo");
// inputArchivo.accept="image/png";

// const inputOtroNormal=document.querySelector(".input-otro-normal");
// inputOtroNormal.minLength=4 //No funciona
// inputOtroNormal.setAttribute("minlength"="4") //Tampoco funciona
// inputOtroNormal.placeholder="hola mundo" //No funciona, ni el aria
// inputOtroNormal.ariaRequired="algo" //No funciona, ni el aria. Si la cadena no esta vacía, el campo sera requerido

// //PARTE 5
// const titulo=document.querySelector(".titulo");
// titulo.style.color="white"; //No servía porque el script estaba antes
// titulo.style.backgroundColor="#48e"; //No servía porque el script estaba antes
// titulo.style.padding="30px";

// //PARTE 6
// const titulo=document.querySelector(".titulo");
// titulo.classList.add("grande"); //añade una palabra al final de lo asignado a class y se usa en conjunto con css para ofrecer cambios
// titulo.classList.remove("grande"); //lo contrario de lo anterior
// titulo.classList.add("rojo");
// titulo.classList.add("circular"); 

// let valor=titulo.classList.item(1); //devuelve la cadena en la posición (1, incia desde 0) de lo asignado a la clase. Esa cadena es una clase como tal
// document.write(valor);

// nombreClase="cuadrada";
// let contiene=titulo.classList.contains(nombreClase); //indica si la cadena esta dentro de lo asignado a la clase. Esa cadena es una clase como tal
// document.write("<br><br>"+contiene+"<br>");
// if(contiene){
//     document.write(`La clase ${nombreClase} está contenida`);
//         //si está, se remueve
// }else{
//     document.write(`La clase ${nombreClase} NO está contenida...`);
//     titulo.classList.add(nombreClase); //si no está, se agrega
//     document.write("...ya se agregó");
// }

// titulo.classList.toggle("otra",true); //si está, se remueve; si no está, se agrega. Todo en una función. Si se le ingresa true, igual la deja. Esto retorna un valor booleano: false, quiere decir que existía y ya la borró; true quiere decir que no existía y ya la creó. Este parámetro no lo soportan IE ni opera 12.

// titulo.classList.replace("rojo","azul")

// document.write("<br><br>"+"se reemplazó la clase rojo por la clase azul");

// //PARTE 7
// const titulo=document.querySelector(".titulo");
// var resultado=titulo.textContent //nos devuelve el texto, no el html si lo tuviera
// document.write(resultado+"<br><br>") 

// var resultado=titulo.innerHTML //nos devuelve el texto, no el html si lo tuviera
// document.write(resultado+"<br><br>") //nos devuelve el texto, y el html según sus atributos si lo tuviera (por ejemplo, una parte oculta, no la mostraría)
// // alert(resultado) // El alert muestra todo con las etiquetas internas al venir de innerHTML 

// var resultado=titulo.outerHTML //nos devuelve el texto, y el html según sus atributos si lo tuviera (por ejemplo, una parte oculta, no la mostraría)
// document.write(resultado+"<br><br>") 
// // alert(resultado) // El alert muestra todo, hasta las etiquetas externas al venir de outerHTML 

// //outerText ya no se usa

// //PARTE 8
// const contenedor=document.querySelector(".contenedor");

// const item=document.createElement("LI"); //LI en mayúsculas
// const textDelItem=document.createTextNode("Este es un item de la lista")
// document.write("<br><br>"+item+"<br><br>")
// document.write(textDelItem)
// console.log(textDelItem)

// // item.innerHTML=textDelItem.textContent //o directamemte, escribir el string ya no es un textNode (?)
// // console.log(item)

// item.appendChild(textDelItem) // Hace visiblemente lo mismo (?) que el anterior
// console.log(item)

// contenedor.appendChild(item) //console para ver agregado el li

// //hacer un ciclo for para añadir muchos child, requiere que el objeto 'textDelItem' vaya dentro, además es muy ineficiente ya que borra cada vez antes de poner. Mejor createDocumentFragment

// const fragmento=document.createDocumentFragment();

// for(i=0;i<20;i++){
//     const item=document.createElement("LI")
//     item.innerHTML=textDelItem.textContent 
//     fragmento.appendChild(item)
// }

// console.log(fragmento)
// contenedor.appendChild(fragmento)

// const primerHijo=contenedor.firstChild
// console.log(primerHijo) //moviendo la etiqueta <h2 justo cuando termina div>

// const ultimoHijo=contenedor.lastChild
// console.log(ultimoHijo) //sin mover nada, muestra un li

// const primerElementoHijo=contenedor.firstElementChild //con esto no habrá que mover nada
// console.log(primerElementoHijo)

// const ultimoElementoHijo=contenedor.lastElementChild
// console.log(ultimoElementoHijo) //con esto no habrá que mover nada

// const hijos=contenedor.childNodes //retorna un NodeList, no un array. Los espacios 'text' también son nodos. Si se juntan las etiquetas desaparecen los espacios y disminuye el número de nodos
// console.log(hijos)
// console.log(hijos[1]) //muestra el nodo en la posición 1
// hijos.forEach(hijo=>console.log(hijo)) // Se puede recorrer un NodeList a pesar de que no es un array

// const hijosNaturales=contenedor.children //No me devuelve los textos, solo elementNodes, solo etiquetas html
// console.log(hijosNaturales)
// //hijosNaturales.forEach(hijoNatural=>console.log(hijoNatural)) //no se puede recorrer con un forEach una HTMLCollection
// for (hijoNatural of hijosNaturales){ //usar of en vez de in
//     console.log(hijoNatural)
// }

//PARTE 9
//agregar un párrafo y un h2 // marcar objetos como const, a las variables simples como let
const contenedor=document.querySelector(".contenedor");
const parrafo=document.createElement("P")
parrafo.innerHTML='Párrafo'
const h2_nuevo=document.createElement("H2")
h2_nuevo.innerHTML='Título'

const h2_antiguo=document.querySelector(".h2")

contenedor.replaceChild(h2_nuevo, h2_antiguo) //Reemplazar el h2. Comentar para no reemolazar

contenedor.removeChild(h2_nuevo) //Remover el hijo h2 nuevo

let respuesta=contenedor.hasChildNodes()
if(respuesta){
    document.write(`El elemento SÍ tiene hijos`)
}else{
    document.write(`El elemento NO tiene hijos`)
}

let resp=parrafo.hasChildNodes()
if(resp){
    document.write(`<br><br>El elemento SÍ tiene hijos`) // sí tiene hijos, ya que tiene texto entre sus etiquetas
}else{
    document.write(`<br><br>El elemento NO tiene hijos`)

}

console.log(contenedor.parentElement)
console.log(parrafo.parentElement) //A parrafo no se le ha indicado quien es el parent, por eso retorna null

//parentNode es muy similar al parentElememt, hay casos muy especificos en los que no
