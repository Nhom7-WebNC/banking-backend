const db = require("../utils/db");

module.exports = {
  add: (entity) => {
    return db.add(entity, "transaction_history");
  },
  findAll: () => db.load(`select * from transaction_history`),
  findByAccountNumber: (account_number) =>
    db.load(
      `select * from transaction_history where receiver_account_number = ${account_number} or sender_account_number =${account_number}`
    ),
  findById: (id) => db.load(`select  * from transaction_history where receiver_id = ${id}`),
};
