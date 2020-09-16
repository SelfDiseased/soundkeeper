module.exports = (sequelize, Sequelize) => {
    const Artist = sequelize.define("artist", {
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      }
    });
  
    return Artist;
};