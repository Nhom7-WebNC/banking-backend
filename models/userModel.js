const db = require('../utils/db');
const bcrypt = require('bcryptjs');
const moment = require('moment');
module.exports = {
    add: entity =>{
        // const hash = bcrypt.hashSync(entity.password, 8);
        // entity.password = hash;
        return db.add(entity, 'user');
    },
    getAllUser: () => db.load(`select * from user`),
    findByUserName: userName => db.load(`select * from user where username = '${userName}'`),
    findById: id => db.load(`select username, name, personal_number, birthday, phone, address, email , gender
                               from user where id = '${id}'`)

    
    
};
//ssd*dd