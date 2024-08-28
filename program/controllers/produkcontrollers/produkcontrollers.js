const { Products } = require('../../models')

const ShowProduct = async(req, res) => {
    
    const dataProducts = await Products.findAll({
        attributes: ['product_id', 'product_name', 'product_brand', 'product_price', 'product_stock']
    });

    return  res.status(200).json(dataProducts)
}

module.exports= { ShowProduct };