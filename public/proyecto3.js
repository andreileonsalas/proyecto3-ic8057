/** Funcion que hace el request tipo post para poder conseguir los datos.
 * Esta hecha exclusivamente para que funcione con nuestro servicio.
 *
 * @param {String} url la url a visitar
 * @param {Object} data el json que envia para la peticion
 */

export async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
/** Agrega un usuario a la base de datos
 *
 * @param {Object} data Incluye la informacion para agregar a un usuario
 *
 * @returns un booleano, verdadero si se inserto, false si no lo inserto
 */

export async function addUser(data) {
  console.log('agregando usuario');
  const url = 'http://localhost:3001/api/addUser';
  return postData(url, data).then((value) => value.inserted);
}

/** Agrega una funcion a la base de datos
 *
 * @param {Object} data Incluye el nombre, funcion, categoria, el usuario que la creo y descripcion
 *
 * @returns un booleano, dependiendo si se inserto o no
 */
export async function addFunction(data) {
  console.log('agregando Funcion');
  const url = 'http://localhost:3001/api/addFunction';
  return postData(url, data).then((value) => value.inserted);
}

/** Funcion que busca las funciones por usuario
 *
 *
 * @param {Object} data el user para buscar en la base de datos
 *
 *  @returns la url a visitar y un objeto con las funciones de ese usuario
 */
export async function getUserFunctions(data) {
  console.log('recopilando funciones');
  const url = 'http://localhost:3001/api/getUserFunctions';
  return postData(url, data);
}
/** Funcion que busca una funcion por categoria
 *
 * @param {Object} data objeto que incluye un parametro category para buscar en la base de datos
 */
export async function getCategoryFunctions(data) {
  const url = 'http://localhost:3001/api/getCategoryFunctions';
  return postData(url, data);
}
/** Funcion que busca una funcion por su nombre
 *
 * @param {Object} data objeto que incluye un parametro name para buscar en la base de datos
 */
export async function getFunction(data) {
  const url = 'http://localhost:3001/api/getFunction';
  return postData(url, data);
}
/** Funcion que busca multiples funciones por usurio
 *
 * @param {Object} data objeto que incluye un arreglo con parametro name, para buscarlo en la base de datos
 *
 *  @returns importadorInstanciado con todas las funciones buscadas
 */
export async function getMultipleFunctions(props) {
  const importadorInstanciado = {};
  for (let index = 0; index < props.length; index += 1) {
    importadorInstanciado[props[index].Nombre] = getFunction(props[index].js);
  }
  return importadorInstanciado;
}
/** Funcion que valida la funcion
 *
 * @param {String} js codigo javascript de la funcion a probar
 *
 *  @returns bool de si es una funcion valida o no
 */
export function validarFuncion(funcionAProbar) {
  try {
    eval(funcionAProbar);
    return true;
  } catch (error) {
    return false;
  }
}
/** Funcion que valida el nombre de usuario
 *
 *
 * @param {object} data objeto con el parametro user, que es el nombre del usuario, y pass que es la contrasena
 *
 *  @returns boolean de si la informacion para logearse es correcta o no
 */
export async function validateUser(data) {
  const url = 'http://localhost:3001/api/validateUser';
  return postData(url, data);
}
/** Funcion que importa las funciones de un usuario
 *
 *
 * @param {object} data un objeto con el user que es el nombre del usuario,y un arreglo de funciones
 * @param {name} Name of the user.
 * @param {description} function description
 * @param {category} category of the function
 * @param {js} function content
 *
 *  @returns boolean si se agrega o no
 */
export async function importadorDeFunciones(props, user) {
  for (let index = 0; index < props.length; index += 1) {
    const data = props[index];
    data.user = user;
    if (validarFuncion(props[index].js)) {
      addFunction(data);
    } else console.log(`Funcion ${index} no agregada`);
  }
}
