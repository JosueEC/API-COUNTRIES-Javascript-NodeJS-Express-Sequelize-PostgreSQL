const { DataTypes } = require('sequelize')

module.exports = (database) => {
  database.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'activity ID cannot be empty.'
        },
        isNumeric: {
          msg: 'activity ID must be numerical value.'
        },
        isInt: {
          msg: 'activity ID must be a valid integer.'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'activity name cannot be empty.'
        },
        len: {
          args: [5, 50],
          msg: 'activity name must be between 5 and 50 characters in length.'
        }
      }
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'activity difficulty cannot be empty.'
        },
        isNumeric: {
          msg: 'activity difficulty must be numerical value.'
        },
        isInt: {
          msg: 'activity difficulty must be a valid integer.'
        },
        isIn: {
          args: [[1, 2, 3, 4, 5]],
          msg: 'activity difficulty must be between 1 and 5 range.'
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'activity duration cannot be empty.'
        },
        isNumeric: {
          msg: 'activity duration must be numerical value.'
        },
        isInt: {
          msg: 'activity duration must be a valid integer.'
        },
        min: {
          args: 1,
          msg: 'activity duration must be at least 1 hour.'
        },
        max: {
          args: 5,
          msg: 'activity duration must be less than equal to 5 hours.'
        }
      }
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'activity season cannot be empty'
        },
        isLowercase: {
          msg: 'activity season must be lowercase'
        },
        isIn: {
          args: [['verano', 'otoño', 'invierno', 'primavera']],
          msg: 'activity season must be a valid season of the year.'
        }
      }
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  })
}
