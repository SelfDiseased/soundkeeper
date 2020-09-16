const db = require("../models");
const Artist = db.artists;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
  
    const artist = {
      _id: req.body._id,
      name: req.body.name,
      image: req.body.image,
    };
  
    
    Artist.create(artist)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Artist."
        });
      });
};

exports.findAll = (req, res) => {
    Artist.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Artists."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Artist.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: `Error retrieving Artist with id=${id}`
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Artist.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (Number(num) === 1) {
          res.send({
            message: "Artist was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Artist with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error updating Artist with id=${id}`
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Artist.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Artist was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Artist with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Could not delete Artist with id=${id}`
        });
      });
};

