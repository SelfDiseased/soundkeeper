module.exports = (sequelize, Sequelize) => {
    const Track = sequelize.define("track", {
      name: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      src: {
        type: Sequelize.STRING
      },
      album_id: {
        type: Sequelize.STRING
      },
      artist_id: {
        type: Sequelize.STRING
      }
    });
  
    return Track;
};