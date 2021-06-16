/** function to register a new user to the database
 *
 * @param req es donde vienen los datos a pedir, el request
 * @param res es donde viene la respuesta de la base de datos, el response
 */
declare const addUser: (req: any, res: any) => Promise<any>;
/** function to validate user credentials for login
 *
 * @param req es donde vienen los datos a pedir, el request
 * @param res es donde viene la respuesta de la base de datos, el response
 */
declare const validateUser: (req: any, res: any) => Promise<any>;
