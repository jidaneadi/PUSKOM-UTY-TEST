module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      product_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_brand: {
        type: DataTypes.INTEGER,
      },
      product_price: {
        type: DataTypes.INTEGER,
      },
      product_stock: {
        type: DataTypes.INTEGER,
      },
      product_active: {
        type: DataTypes.INTEGER,
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
    { tableName: "products" }
  );
  return Products;
};
