/** function to register a new user to the database
 *
 * @param req es donde vienen los datos a pedir, el request
 * @param res es donde viene la respuesta de la base de datos, el response
 */
const addUser = async (req, res) => {
    try {
        const users = db.collection('users');
        const snapshot = await users.where('user', '==', req.body.user).get();
        /* validates if the username already exists */
        if (snapshot.empty) {
            /* Add the new user. The  id of document is the same as the username */
            await users.doc(req.body.user).set(req.body);
            return res.status(200).send({ inserted: true });
        }
        else {
            // matching id of document
            return res.status(200).send({ inserted: false });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ inserted: false }); /* 500: internal error */
    }
};
/** function to validate user credentials for login
 *
 * @param req es donde vienen los datos a pedir, el request
 * @param res es donde viene la respuesta de la base de datos, el response
 */
const validateUser = async (req, res) => {
    try {
        const reg = await db.collection('users').doc(req.body.user).get();
        const response = reg.data();
        if (response != undefined) {
            /* validates password and username */
            response.user == req.body.user && response.pass == req.body.pass ? res.send({ valid: true }) : res.status(200).send({ valid: false });
        }
        else {
            res.status(200).send({ valid: false });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ valid: false }); /* 500: internal error */
    }
};
module.exports = {
    addUser,
    validateUser,
};
//# sourceMappingURL=users_controllers.js.map