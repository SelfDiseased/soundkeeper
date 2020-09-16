module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      registered: {
        type: Sequelize.DATE
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
};