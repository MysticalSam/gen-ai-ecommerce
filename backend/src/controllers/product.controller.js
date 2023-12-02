const productService = require("../services/product.service");

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//export module with getAllProducts
module.exports = { getAllProducts }