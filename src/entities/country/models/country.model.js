const DataTypes = require('sequelize')

module.exports = (database) => {
  database.define('country', {
    id: {
      type: DataTypes.STRING,
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
        len: {
          args: [2, 50],
          msg: 'country name must be between 2 and 50 characters'
        }
      }
    },
    officialName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'official country name cannot be empty'
        },
        len: {
          args: [2, 50],
          msg: 'official country name must be between 2 and 50 characters'
        }
      }
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'contry tag cannot be empty'
        },
        isLowercase: {
          msg: 'country tag must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'country tag must be between 2 and 50 characters'
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
    area: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'country area must be numerical value'
        },
        isInt: true
      }
    },
    population: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'country population must be numerical value'
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
    maps: {
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
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  })
}
