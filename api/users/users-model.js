const db = require("../database/dbConfig");

module.exports = {
  getUsers,
};

function getUsers() {
  return db("users").select("users.*");
} 

function insert(user) {
    return db('users')
        .insert(user)
        .then(ids => {
            return getById(ids[0])
        })
}