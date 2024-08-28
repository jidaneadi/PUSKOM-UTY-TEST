const { QueryTypes } = require('sequelize')
const { Products, sequelize } = require('../../models')

const ShowProduct = async(req, res) => {
    
    const dataProducts = await sequelize.query('SELECT products.product_id, products.product_name, products.product_brand, products.product_price, products.product_stock, brands.brand_id, brands.brand_name FROM products LEFT JOIN brands ON brands.brand_id = products.product_id;',
    {
        type: QueryTypes.SELECT
      })

    if(dataProducts === " "){
        return res.status(404).json({msg : "Data transaksi kosong!"})
    }
    return  res.status(200).json({
        status: true,
        message: "Sukses get produk",
        result: dataProducts
    })
}

module.exports= { ShowProduct };