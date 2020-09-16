const db = require("../models");
const Genre = db.Genres;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
  
    const genre = {
      _id: req.body._id,
      name: req.body.name,
      image: req.body.image,
    };
  
    
    Genre.create(genre)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Genre."
        });
      });
};

exports.findAll = (req, res) => {
    Genre.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Genres."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Genre.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: `Error retrieving Genre with id=${id}`
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Genre.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (Number(num) === 1) {
          res.send({
            message: "Genre was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Genre with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error updating Genre with id=${id}`
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Genre.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Genre was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Genre with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Could not delete Genre with id=${id}`
        });
      });
};

