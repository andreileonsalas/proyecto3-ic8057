### Como inicializar el proyecto

npm install
npm run nodemon
y luego ingresamos a http://localhost:3000/index.html


### Ejemplo del modulo para uso externo

ejemplo importar funciones de un usuario de forma externa:

import * as importador from "./proyecto3.mjs";
let props = [
    {
        "id": 1,
        "name": "sumar",
        "description": "Suma dos valores",
        "category": "matemáticas",
        "js": "function sumar(a,b){return (a+b)}"
    },
    {
        "id": 2,
        "name": "restar",
        "description": "Resta a - b",
        "category": "matemáticas",
        "js": "function restar(a,b){return (a-b)}"
    },
    {
        "id": 3,
        "name": "concatenar",
        "description": "Concatena strings",
        "category": "Cadenas",
        "js": "function concatenar(a,b){return (a+b)}"
    },
    {
        "id": 4,
        "name": "incrementar",
        "description": "Incrementa el valor recibido",
        "category": "Matemáticas",
        "js": "(a,b)=>return(a+1)"
    }
]

var seimporto4 = await importador.importadorDeFunciones(props,'andreileonsalas')
console.log(seimporto4)

De esta forma se importan todas las funciones que logren validarse (por ejemplo la de incrementar no ingresa ya que eval no lo acepta)

### Generar documentacion externa

para generar la documentacion de express:
apidoc -i controllers -o apidoc/

Y la documentacion generada es visible en esta carpeta: apidoc

para generar la documentacion del modulo:
hay que renombrar proyecto3.mjs a proyecto3.js
luego: jsdoc public\proyecto3.js 
Finalmente la documentacion esta en la carpeta: out

### Developing with Gitpod

This template has a fully-automated dev setup for [Gitpod](https://docs.gitlab.com/ee/integration/gitpod.html).

If you open this project in Gitpod, you'll get all Node dependencies pre-installed and Express will open a web preview.
