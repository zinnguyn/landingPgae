const db = require("../config/db");

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM customers", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
