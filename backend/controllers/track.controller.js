const db = require("../models");
const Track = db.Tracks;
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
  
    const track = {
      _id: req.body._id,
      name: req.body.name,
      duration: req.body.duration,
      src: req.body.src,
      album_id: req.body.album_id,
      artist_id: req.body.artist_id,
    };
  
    
    Track.create(track)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Track."
        });
      });
};

exports.findAll = (req, res) => {
    Track.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Tracks."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Track.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: `Error retrieving Track with id=${id}`
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Track.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (Number(num) === 1) {
          res.send({
            message: "Track was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Track with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error updating Track with id=${id}`
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Track.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Track was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Track with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Could not delete Track with id=${id}`
        });
      });
};

exports.findTracksByAlbum = (req, res) => {
  const albumId = req.params.album_id ? req.params.album_id : null;
  Track.findAll({ where: { album_id: albumId } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tracks by album"
      });
    });
};

exports.findTracksByArtist = (req, res) => {
  const artistId = req.params.artist_id ? req.params.artist_id : null;
  Track.findAll({ where: { artist_id: artistId } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tracks by artist"
      });
    });
};


