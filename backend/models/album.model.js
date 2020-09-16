module.exports = (sequelize, Sequelize) => {
    const Album = sequelize.define("album", {
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      genre_id: {
        type: Sequelize.STRING
      }
    });
  
    return Album;
};