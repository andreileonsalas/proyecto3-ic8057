/* Firebase conection */
const db = require('../firebase/firebase_config');
/** function to add function from user
 *
 * @param req es donde vienen los datos a pedir, el request
 * @param res es donde viene la respuesta de la base de datos, el response
 */
const addFunction = async (req, res) => {
    try {
        const reg = await db.collection('users').doc(req.body.user).get();
        const response = reg.data();
        /* validates if username exists inside the database */
        if (response !== undefined) {
            /* Add the function to the user. Generates id of document by itself */
            await db.collection('functions').doc().set(req.body);
            return res.status(200).send({ inserted: true });
        }
        else {
            console.log(`\nThe user ${req.body.user} does not exist!`);
            return res.status(200).send({ inserted: false });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ inserted: false }); /* 500: internal error */
    }
};
/** function that receives the username and returns all his functions
 *
 * @param req es donde vienen los datos a pedir, el request
 * @param res es donde viene la respuesta de la base de datos, el response
 */
async function getUserFunctions(req, res) {
    try {
        const data = db.collection('functions');
        // Create a query against the collection
        const queryRef = await data.where('user', '==', `${req.body.user}`).get();
        const products = [];
        queryRef.forEach(product => {
            const data = product.data();
            data.id = product.id;
            products.push(data);
        });
        return res.status(200).send(products);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({}); /* 500: internal error */
    }
}
module.exports = {
    addFunction,
    getUserFunctions,
};
//# sourceMappingURL=functions_controllers.js.map