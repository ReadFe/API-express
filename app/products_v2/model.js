const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');

const Product = sequelize.define(
  'Product',
  {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    image_url: {
        type: DataTypes.TEXT
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    
  }
);

// console.log(Product === sequelize.models.Product); // true
module.exports = Product;