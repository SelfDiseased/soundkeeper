const db = require("../models");
const Album = db.Albums;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
    if (!req.body.genre_id) {
      res.status(400).send({
        message: "genre_id can not be empty!"
      });
      return;
    }
    if (!req.body.image) {
      req.body.image = "https://www.mediablitzpublicity.com/home/wp-content/uploads/2016/11/music-album_318-43305.jpg";
    }
  
    const album = {
      _id: req.body._id,
      name: req.body.name,
      image: req.body.image,
      genre_id: req.body.genre_id,
    };
  
    
    Album.create(album)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Album."
        });
      });
};

exports.findAll = (req, res) => {
    Album.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Albums."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Album.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: `Error retrieving Album with id=${id}`
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Album.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (Number(num) === 1) {
          res.send({
            message: "Album was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Album with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error updating Album with id=${id}`
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Album.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Album was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Album with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Could not delete Album with id=${id}`
        });
      });
};

exports.findAlbumsByGenre = (req, res) => {
    const genreId = req.params.genre_id ? req.params.genre_id : null;
    Album.findAll({ where: { genre_id: genreId} })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Albums by genre"
        });
      });
  };

