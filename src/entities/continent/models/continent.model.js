const { DataTypes } = require('sequelize')

module.exports = (database) => {
  database.define('continent', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'continent ID cannot be empty'
        },
        isNumeric: {
          msg: 'continent ID must be numerical value'
        },
        isInt: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'continent name cannot be empty'
        },
        isLowercase: {
          msg: 'continent name must be lowercase'
        },
        len: {
          args: [2, 12],
          msg: 'continent name must be between 2 and 12 characters in length'
        }
      }
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'continent tag cannot be empty'
        },
        isLowercase: {
          msg: 'continent tag must be lowercase'
        },
        len: {
          args: [2, 12],
          msg: 'continent tag must be between 2 and 12 caharacters in length'
        }
      }
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  })
}
