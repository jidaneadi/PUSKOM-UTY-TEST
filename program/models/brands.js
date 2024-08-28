module.exports = (sequelize, DataTypes) => {
    const Brands = sequelize.define(
      "Brands",
      {
        brand_id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
        },
        brand_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        brand_active:{
            type:DataTypes.INTEGER
        },
        createdAt: {
          field: "created_at",
          type: DataTypes.DATE,
        },
        updatedAt: {
          field: "updated_at",
          type: DataTypes.DATE,
        },
      },
      { tableName: "brands" }
    );
    return Brands;
  };
  