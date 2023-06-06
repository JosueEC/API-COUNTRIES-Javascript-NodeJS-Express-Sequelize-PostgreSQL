const DataTypes = require('sequelize')

module.exports = (database) => {
  database.define('country', {
    id: {
      type: DataTypes.TEXT('tiny'),
      primaryKey: true,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'country ID cannot be empty'
        },
        len: {
          args: [3, 3],
          msg: 'country ID must be 3 alphabetic characters'
        },
        isUppercase: {
          msg: 'country ID must be uppercase'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'country name cannot be empty'
        },
        isLowercase: {
          msg: 'country name must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'country name must be between 2 and 50 characters'
        }
      }
    },
    official_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'official country name cannot be empty'
        },
        isLowercase: {
          msg: 'official country name must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'official country name must be between 2 and 50 characters'
        }
      }
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'country region cannot be empty'
        },
        isLowercase: {
          msg: 'country region must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'country region must be between 2 and 50 characters'
        }
      }
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'country subregion cannot be empty'
        },
        isLowercase: {
          msg: 'country subregion must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'country subregion must be between 2 and 50 characters'
        }
      }
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'capital country cannot be empty'
        },
        isLowercase: {
          msg: 'capital country must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'capital country must be between 2 and 50 characters'
        }
      }
    },
    area: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'country area must be numerical value'
        },
        isInt: {
          msg: 'country area must be a valid integer value'
        }
      }
    },
    population: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'country population must be numerical value'
        },
        isInt: {
          msg: 'country population must be a valid integer value'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'country image cannot be empty'
        },
        isUrl: {
          msg: 'invalid URL format, must be an image URL'
        }
      }
    },
    map: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'country map cannot be empty'
        },
        isUrl: {
          msg: 'invalid format, must be an google maps URL'
        }
      }
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'country continent cannot be empty'
        },
        isLowerCase: {
          msg: 'country continent must be lowercase'
        },
        isIn: {
          args: [['africa', 'america', 'asia', 'europa', 'oceania', 'antartida']],
          msg: 'country continent must be a valid world continent'
        }
      }
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  })
}
