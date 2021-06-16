var admin = require("firebase-admin");

var serviceAccount = require("./proyecto3-web-5439a-firebase-adminsdk-txuxm-0f6cb55ff7.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://proyecto3-web-5439a.firebaseio.com"
});

const db = admin.firestore();

module.exports = db;