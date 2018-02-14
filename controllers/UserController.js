const jwt = require('jsonwebtoken');

const User = require('../models/User');
const comparePassword = require('../helpers/comparePassword');

class UserController {

  static register(req, res) {
    let obj = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };

    User.create(obj)
      .then(doc => {
        res.status(200).json({
          message: 'User created',
          doc: doc
        });
      })
      .catch(error => {
        res.status(500).json({
          message: error.message
        });
      });
  }

  static login(req, res) {
    User.findOne({
        email: req.body.email
      })
      .then(user => {
        comparePassword(req.body.password, user.password)
          .then(result => {
            if (result) {
              let token = jwt.sign({
                _id: user._id,
                name: user.name,
                email: user.email
              }, process.env.JWT_TOKEN_SECRET);
                        
              res.status(200).json({
                message: 'Successfully login',
                token: token
              });
            } else {
              res.status(500).json({
                message: 'Email or password you entered wrong!'
              });
            }
          })
          .catch(error => {
            res.status(500).json({
              message: error.message
            });
          });
      })
      .catch(error => {
        res.status(500).json({
          message: error.message
        });
      });
  }
}

module.exports = UserController;