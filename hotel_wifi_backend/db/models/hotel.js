const Sequelize = require('sequelize')
const db = require('../db')

// Spin.belongsTo(Game);
module.exports = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  downloadSpeed: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  uploadSpeed: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  latency: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  usernameInput: {
    type: Sequelize.STRING,
    allowNull: true
  }
})
