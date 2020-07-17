/**
 *   1)Crear una lista desordenada con 10 elementos dentro usando un bucle for.
 *       Tener en cuenta que solo se le puede hacer un único appendChild al ul creado,
 *        asi minimizamos el tiempo de modificaciones en el DOM.
 */
function ej_1() {
  let fragment = document.createDocumentFragment();
  let ul = document.createElement("ul");

  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.innerText = "item" + i;
    fragment.appendChild(li);
  }

  ul.appendChild(fragment);
  console.log("Ejercicio 1 - Resuelto");
  return ul;
}
console.log(ej_1());

/**
 *   2)Hacer que el <article> con id "movil" solamente se vea si la pagina se carga a menos de 500px.
 */
function ej_2() {
  let m = document.getElementById("movil");
  if (window.innerWidth < 500) {
    m.style.display = "initial";
  } else {
    m.style.display = "none";
  }
  return "Ejercicio 2 - Resuelto";
}
//console.log(ej_2());

/**
 *   3)Realizar la misma operacion que en el punto uno, pero ahora para el <ul>
 *       que ya se encuentra en el <body>.
 *       Recordar que no se puede hacer multiples appendChild a un nodo.
 */
let ul = document.getElementById("estatico");
function ej_3() {
  let f = document.createDocumentFragment();
  for (let i = 1; i < 11; i++) {
    let li = document.createElement("li");
    li.innerText = "Item #" + i;
    f.appendChild(li);
  }
  console.log("Ejercicio 3 - Resuelto");
  return f;
}
ul.appendChild(ej_3());

/**
 *   4)Intercambiar las URLs de los links de la barra de navegacion.
 *       El que dice Google! tiene que redirigir a educacionit.com y viceversa.
 */
let a = document.getElementsByTagName("a");
function ej_4() {
  console.log("Ejercicio 4 - Resuelto");
  return ([a[0].href, a[1].href] = [a[1].href, a[0].href]);
}
console.log(ej_4());

/**
 *   5)Cambiarle el color del fondo al <header> por alguna tonalidad de azul oscuro y
 *       al <h1> por alguna tonalidad de blanco para que contraste.
 */
let header = document.getElementsByTagName("header");
let h1 = document.getElementsByTagName("h1");
function ej_5() {
  header[0].style.backgroundColor = "blue";
  h1[0].style.backgroundColor = "rgba(50,50,50,0.5)";
  console.log("Ejercicio 5 - Resuelto");
}
ej_5();

/**
 *   6)Realizar un efecto marquesina en un nodo <p> que diga "Mi primer programa en JS"
 *       que muestre de a una letra a la vez cada medio segundo por letra.
 */
function ej_6(param) {
  let t = param;
  let p = document.createElement("p");
  p.innerText = "";
  document.querySelector("header").appendChild(p);
  let counter = 0;
  let intervalo = setInterval(() => {
    if (counter < t.length) {
      p.innerText += t[counter];
      counter++;
    } else {
      p.innerText = "";
      counter = 0;
    }
  }, 300);
  console.log("Ejercicio 6 - Resuelto");
}
console.log(ej_6("Mi primer programa en JS"));

/**
 *   7)Crear un <div> de 200px de ancho por 200px de alto con el color de fondo a eleccion.
 *       El elemento tiene que poder ir y venir a lo largo de todo el ancho de la pantalla
 *       de manera continua.
 */
let body = document.getElementsByTagName("body");
function ej_7() {
  let div = document.createElement("div");
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.marginLeft = "10px";
  div.style.backgroundColor = "silver";
  body[0].appendChild(div);

  let n = 0;
  let left;

  let intervalo = setInterval(() => {
    left = 200 + parseInt(div.style.marginLeft);
    console.log(left);

    if (left < window.innerWidth) {
      n++;
      div.style.marginLeft = n + "px";
    }
  }, 1);
  console.log("Ejercicio 7 - Resuelto");
}
console.log(ej_7());

/**
 *   8)Al <div> del punto anterior transformarlo en circulo cada vez que se aproxime
 *       al centro de la pantalla y que vuelva a cuadrado cuando se aproxime a los extremos.
 */
function ej_8() {}
console.log(ej_8());
