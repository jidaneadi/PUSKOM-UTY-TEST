const { Brands } = require('../../models');

const ShowBrand = async(req, res) => {

    
    const dataBrand = await Brands.findAll({
        attributes: ['brand_id', 'brand_name']
    });

    return  res.status(200).json({
        status: true,
        message:'Sukses get brands',
        result: dataBrand
    })

}

module.exports = { ShowBrand };