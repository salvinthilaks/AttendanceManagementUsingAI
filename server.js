const { MongoClient } = require("mongodb");

let dbConnection;
let uri =
  "mongodb+srv://salvinthilaks:pmZQTGk5G2uZYsKs@data.hbozntc.mongodb.net/";

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
