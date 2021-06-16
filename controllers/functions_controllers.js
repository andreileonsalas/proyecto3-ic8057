/* Firebase conection */

const db = require('../firebase/firebase_config');

/** function to add function from user
 * @api {post} api/addFunction function to add function from user
 * @apiName addFunction
 * @apiGroup Funtions
 *
 * @apiParam {name} Name of the user.
 * @apiParam {description} function description
 * @apiParam {category} category of the function
 * @apiParam {js} function content
 *
 * @apiSuccess {boolean} inserted return true if sucessfully registered
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "inserted": true
 *     }
 *
 * @apiError error response:
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "inserted": false
 *     }
 */

const addFunction = async (req, res) => {
  try {
    const reg = await db.collection('users').doc(req.body.user).get();
    const response = reg.data();
    /* validates if username exists inside the database */
    if (response !== undefined) {
      /* function to validate user credentials for login. Generates id of document by itself */
      await db.collection('functions').doc().set(req.body);
      return res.status(200).send({ inserted: true });
    }
    console.log(`\nThe user ${req.body.user} does not exist!`);
    return res.status(200).send({ inserted: false });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ inserted: false }); /* 500: internal error */
  }
};

/** function that receives the username and returns all his functions
 *
 * @api {post} api/getUserFunctions function that receives a username and returns all his functions
 * @apiName getUserFunctions
 * @apiGroup Funtions
 *
 * @apiparam {user} user of the function
 *
 * @apiSuccess {boolean} found the functions
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      Object { user: "ronaldhg", id: "0z48ebUNsvsVL3eDduVm", js: "", … }
 *     }
 *
 * @apiError error repsonse
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       []
 *     }
 */
async function getUserFunctions(req, res) {
  try {
    const data = db.collection('functions');
    // Create a query against the collection
    const queryRef = await data.where('user', '>=', `${req.body.user}`).where('user', '<=', `${req.body.user}~`).get();

    const products = [];
    queryRef.forEach((product) => {
      const data = product.data();
      data.id = product.id;
      products.push(data);
    });
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    return res.status(500).send({}); /* 500: internal error */
  }
}

/** function that receives the function name and returns ir
 *
 * @api {post} api/getFunction function that receives the function name and returns ir
 * @apiName getFunction
 * @apiGroup Funtions
 *
 * @apiparam {name} function's name
 *
 * @apiSuccess {object} an object with the function
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         name: "sumar",
 *         js: "function sumar(a,b){return (a+b)}"
 *         description: "hace sumas"
 *         category: "matematicas"
 *         user: "andreileonsalas"
 *         id: "NMM2Sr6zawhNcaafX7yM"
 *     }
 *
 * @apiError it returns an empty array
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       []
 *     }
 *
 */
async function getFunction(req, res) {
  try {
    const data = db.collection('functions');
    // Create a query against the collection
    const queryRef = await data.where('name', '>=', `${req.body.name}`).where('name', '<=', `${req.body.name}~`).get();

    const products = [];
    queryRef.forEach((product) => {
      const data = product.data();
      data.id = product.id;
      products.push(data);
    });
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    return res.status(500).send({}); /* 500: internal error */
  }
}

/** function that receives the category and returns all functions of that category
 *
 * @api {get} api/getCategoryFunctions function that receives the category and returns all functions
 * @apiName getUserFunctions
 * @apiGroup Funtions
 *
 * @apiparam req es donde vienen los datos a pedir, el request
 * @apiparam res es donde viene la respuesta de la base de datos, el response
 *
 *
 *
 *
 */
async function getCategoryFunctions(req, res) {
  try {
    const data = db.collection('functions');
    // Create a query against the collection
    const queryRef = await data.where('category', '>=', `${req.body.category}`).where('category', '<=', `${req.body.category}~`).get();

    const products = [];
    queryRef.forEach((product) => {
      const data = product.data();
      data.id = product.id;
      products.push(data);
    });
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    return res.status(500).send({}); /* 500: internal error */
  }
}

module.exports = {
  addFunction,
  getUserFunctions,
  getFunction,
  getCategoryFunctions,
};
