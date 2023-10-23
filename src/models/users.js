const dbPoll = require('../config/database')
const getAllUsers = () => {
       const sqlQuery = 'SELECT * FROM users';

       return dbPoll.execute(sqlQuery);

}
const createNewUsers = (body) => {
       const sqlQuery = `INSERT INTO users (name, email, quotes) VALUE ('${body.name}','${body.email}','${body.quotes}')`;

       return dbPoll.execute(sqlQuery);

}
const updateUsers = (body, idUser) => {
       const sqlQuery = `UPDATE users SET name='${body.name}', email='${body.email}', quotes='${body.quotes}' WHERE id=${idUser}`;
       
       return dbPoll.execute(sqlQuery);
}
const deleteUser = (idUser) => {
       const sqlQuery = `DELETE FROM users WHERE id'=${idUser}`;
       
       return dbPoll.execute(sqlQuery);
}
module.exports ={
       getAllUsers,
       createNewUsers,
       updateUsers,
       deleteUser,
}