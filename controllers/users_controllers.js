const db = require('../firebase/firebase_config');
/**
 * @api {post} /api/addUser Get User information
 * @apiName AddUser
 * @apiGroup User
 *
 * @apiParam {name} Name of the user.
 * @apiParam {lastname} Lastname of the user.
 * @apiParam {user} Username of the user, normally their email address.
 * @apiParam {pass} password of the user.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "inserted": true
 *     }
 *
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "inserted": false
 *     }
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
    // matching id of document
    return res.status(200).send({ inserted: false });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ inserted: false }); /* 500: internal error */
  }
};

/** function to validate user credentials for login
 * @api {post} /api/validateUser function to validate user credentials for login
 * @apiName AddUser
 * @apiGroup User
 *
 * @apiParam {name} Name of the user.
 * @apiParam {lastname} Lastname of the user.
 * @apiParam {user} Username of the user, normally their email address.
 * @apiParam {pass} password of the user.
 *
 * @apiSuccess {boolean} inserted return true if sucessfully registered
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "inserted": true
 *     }
 *
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "inserted": false
 *     }
 */
const validateUser = async (req, res) => {
  try {
    const reg = await db.collection('users').doc(req.body.user).get();
    const response = reg.data();
    if (response !== undefined) {
      /* validates password and username */
      response.user == req.body.user && response.pass == req.body.pass ? res.send({ valid: true }) : res.status(200).send({ valid: false });
    } else {
      res.status(200).send({ valid: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ valid: false }); /* 500: internal error */
  }
};

module.exports = {
  addUser,
  validateUser,
};
