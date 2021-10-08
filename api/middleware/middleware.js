const Users = require('../users/users-model.js');

function validateUserId(req, res, next) {
    try{
      const {id} = req.params;
      const user = Users.getById(id);
      if(!user){
         res.status(404).json({
           message: `User ${user} not found`
          });
      } else {
        req.user = user;
        next();
      } 
    } catch(err){
      res.status(500).json({
        message: err.message
      });
    };
  };

  module.exports = {
      validateUserId
  }