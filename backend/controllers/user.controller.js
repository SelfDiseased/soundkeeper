const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
    if (!req.body.password) {
      res.status(400).send({
        message: "Password can not be empty!"
      });
      return;
    }
  
    const user = {
      _id: req.body._id,
      name: req.body.name,
      password: req.body.password,
      registered: Date.now(),
      role: 'user',
      email: req.body.email,
    };
  
    
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
};

exports.findAll = (req, res) => {
    const role = 'user';
    const condition = role ? { role: { [Op.iLike]: `%${role}%` } } : null;
  
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: `Error retrieving User with id=${id}`
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (Number(num) === 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error updating User with id=${id}`
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Could not delete User with id=${id}`
        });
      });
};

exports.findAllAdmins = (req, res) => {
    User.findAll({ where: { role: 'admin' } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving admin users"
        });
      });
  };

