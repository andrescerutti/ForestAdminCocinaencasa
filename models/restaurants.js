// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Restaurants = sequelize.define('restaurants', {
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    testMpPublicKeyCiphertext: {
      type: DataTypes.STRING,
    },
    testMpPrivateKeyCiphertext: {
      type: DataTypes.STRING,
    },
    prodMpPublicKeyCiphertext: {
      type: DataTypes.STRING,
    },
    prodMpPrivateKeyCiphertext: {
      type: DataTypes.STRING,
    },
    ownDelivery: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    tableName: 'restaurants',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Restaurants.associate = (models) => {
    Restaurants.belongsTo(models.users, {
      foreignKey: {
        name: 'userIdKey',
        field: 'user_id',
      },
      as: 'user',
    });
    Restaurants.belongsTo(models.brands, {
      foreignKey: {
        name: 'brandIdKey',
        field: 'brand_id',
      },
      as: 'brand',
    });
    Restaurants.hasMany(models.kits, {
      foreignKey: {
        name: 'restaurantIdKey',
        field: 'restaurant_id',
      },
      as: 'kits',
    });
  };

  return Restaurants;
};
