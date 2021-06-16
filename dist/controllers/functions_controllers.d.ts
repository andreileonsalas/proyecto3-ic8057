declare const db: any;
/** function to add function from user
 *
 * @param req es donde vienen los datos a pedir, el request
 * @param res es donde viene la respuesta de la base de datos, el response
 */
declare const addFunction: (req: any, res: any) => Promise<any>;
/** function that receives the username and returns all his functions
 *
 * @param req es donde vienen los datos a pedir, el request
 * @param res es donde viene la respuesta de la base de datos, el response
 */
declare function getUserFunctions(req: any, res: any): Promise<any>;
