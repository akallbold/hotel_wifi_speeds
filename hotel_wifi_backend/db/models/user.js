const Sequelize = require('sequelize')
const db = require('../db')

// Spin.belongsTo(Game);
module.exports = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
